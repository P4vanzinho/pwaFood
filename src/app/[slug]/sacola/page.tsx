'use client';

import Title from '@/app/components/Title';
import { Container } from './styles';
import { useBagContext } from '@/context/bag';
import Button from '@/app/components/Button';
import { inter } from '@/app/fonts';
import BagItem from '@/app/components/BagItem';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getPublicUser } from '@/utils/cookiePublicUser';

type BagProps = {
  params: {
    slug: string;
  };
};

export default function Bag({ params }: BagProps) {
  const user = getPublicUser();
  const needsPersonalData = !user?.whatsapp || !user?.address || !user.name;
  const { itens, total } = useBagContext();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const addItemOnClick = () => {
    router.push(`/${params.slug}`);
  };

  const paymentMethodButtonOnClick = () => {
    setLoading(true);

    const route = needsPersonalData
      ? `/${params?.slug}/checkout/entrega/endereco-entrega`
      : `/${params?.slug}/checkout/entrega`;

    router.push(route);
  };

  return (
    <>
      <Container>
        <div>
          <Title>Sacola</Title>

          {itens.map(item => (
            <BagItem key={item.id} item={item} />
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
            loading={!!loading}
          />
        </footer>
      </Container>
    </>
  );
}
