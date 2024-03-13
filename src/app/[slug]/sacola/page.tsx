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
import { useOrderContext } from '@/context/order';

type BagProps = {
  params: {
    slug: string;
  };
};

export default function Bag({ params }: BagProps) {
  const user = getPublicUser();
  const { setCurrentOrder } = useOrderContext();
  const needsPersonalData = !user?.whatsapp || !user?.address || !user.name;
  // TODO fix itens text
  const { itens: items, total } = useBagContext();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const addItemOnClick = () => {
    router.push(`/${params.slug}`);
  };

  const paymentMethodButtonOnClick = () => {
    setLoading(true);

    const route = needsPersonalData
      ? `/${params?.slug}/checkout/entrega/alterar`
      : `/${params?.slug}/checkout/entrega`;

    const orderItems = items.map(item => ({
      price: item.unityPrice,
      productId: item.productId,
      qty: item.qty,
    }));

    setCurrentOrder({
      businessId: params.slug,
      items: orderItems,
    });

    router.push(route);
  };

  return (
    <>
      <Container>
        <div>
          <Title>Sacola</Title>

          {items.map(item => (
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
