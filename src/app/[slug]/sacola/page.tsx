'use client';

import Title from '@/app/components/Title';
import { Container } from './styles';
import { useBagContext } from '@/context/bag';
import Button from '@/app/components/Button';
import { inter, bebas_neue } from '@/app/fonts';
import BagItem from '@/app/components/BagItem';
import { useRouter } from 'next/navigation';
import Price from '@/app/components/Price';

type BagProps = {
  params: {
    slug: string;
  };
};

export default function Bag({ params }: BagProps) {
  const { itens, total } = useBagContext();

  const router = useRouter();

  const addItemOnClick = () => {
    router.push(`/${params.slug}`);
  };

  const paymentMethodButtonOnClick = () => {};

  return (
    <Container>
      <div>
        <Title>Sacola</Title>

        {itens.map((item, index) => (
          <BagItem key={item.id} index={index} item={item} />
        ))}

        <button className={inter.className} onClick={addItemOnClick}>
          <span>ADICIONAR + ITENS</span>
        </button>
      </div>

      <footer>
        <Button
          disabled={!total}
          text="FINALIZAR PEDIDO"
          onClick={paymentMethodButtonOnClick}
        />
      </footer>
    </Container>
  );
}
