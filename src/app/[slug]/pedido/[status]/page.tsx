'use client';

import Button from '@/app/components/Button';
import { Container } from './styles';
import error from '@/assets/images/error.svg';
import success from '@/assets/images/success.svg';
import Image from 'next/image';
import Title from '@/app/components/Title';
import Text from '@/app/components/Text';
import { isMobile } from 'react-device-detect';
import { useOrderContext } from '@/context/order';

type PedidoStatusProps = {
  params: {
    status: 'sucesso' | 'erro';
  };
};

export default function PedidoStatus({ params }: PedidoStatusProps) {
  const { current } = useOrderContext();

  const buttonOnCLick = () => {
    if (!current) {
      console.error('current order is empty');
      return;
    }

    if (params.status === 'sucesso') {
      const message = current.raw.whatsapp as string;
      const phoneNumber = current?.business.whatsapp as string;

      let url = isMobile
        ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURI(message)}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURI(
            message,
          )}`;

      if (!isMobile) {
        url += `&app_absent=0`;
      }

      window.open(url);
    }
  };

  const title =
    params.status === 'sucesso'
      ? 'TUDO CERTO COM SEU PEDIDO!'
      : 'ALGO DEU ERRADO!';

  const altImage =
    params.status === 'sucesso' ? 'imagem de sucesso' : 'imagem de erro';

  const text =
    params.status === 'sucesso'
      ? 'Por favor clique no botão abaixo para ser encaminhado ao Whatsapp para confirmar seu pedido. '
      : 'Algo deu errado com seu pedido. Clique no botão abaixo para tentar enviar seu pedido novamente.';

  const buttonText =
    params.status === 'sucesso' ? 'ABRIR WHATSAPP' : 'TENTAR NOVAMENTE';

  return (
    <Container status={params.status}>
      <Title>{title}</Title>
      <Image
        src={params.status === 'sucesso' ? success : error}
        width={200}
        height={200}
        alt={altImage}
      ></Image>
      <Text>{text}</Text>

      <div>
        <Button text={buttonText} onClick={buttonOnCLick} />
      </div>
    </Container>
  );
}
