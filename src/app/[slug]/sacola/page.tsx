'use client';

import Title from '@/app/components/Title';
import { Container } from './styles';
import { useBagContext } from '@/context/bag';
import Button from '@/app/components/Button';
import { inter } from '@/app/fonts';
import BagItem from '@/app/components/BagItem';
import { useRouter } from 'next/navigation';
import useFoodFetch from '@/app/hooks/useFoodFetch';
import { FoodApiOrder } from '../../../../types/foodApi';
import { EndpointFoodApiEnum } from '@/app/enums';
import { useEffect, useState } from 'react';
import { useOrderContext } from '@/context/order';
import { getPublicUser } from '@/utils/cookiePublicUser';

type BagProps = {
  params: {
    slug: string;
  };
};

export default function Bag({ params }: BagProps) {
  const { itens, total } = useBagContext();
  const { current, setCurrent } = useOrderContext();
  const { request, data: order } = useFoodFetch<FoodApiOrder>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const addItemOnClick = () => {
    router.push(`/${params.slug}`);
  };

  const paymentMethodButtonOnClick = () => {
    setLoading(true);

    const user = getPublicUser();

    if (!user?.whatsapp) {
      // será necessario pegar o whatsapp do usuario
    }

    request({
      endPoint: `${EndpointFoodApiEnum.BUSINESS}/${params.slug}/order`,
      body: {
        user: {
          homeType: 'house',
          whatsapp: user?.whatsapp,
          name: user?.name,
          address: {
            street: 'Rua Joaquim Ronchezel',
            state: 'SP',
            number: '250',
            city: 'Jaú',
            address2: 'Casa fundos',
          },
        },
        businessId: params.slug,
        items: itens.map(item => ({
          price: item.unityPrice,
          productId: item.productId,
          qty: item.qty,
        })),
      },
      method: 'POST',
    });
  };

  useEffect(() => {
    if (!order?.id) {
      return;
    }

    setCurrent(order);
  }, [order, setCurrent]);

  useEffect(() => {
    if (!current?.id) {
      return;
    }

    setLoading(false);
    router.replace(`/${params.slug}/pedido/sucesso`);
  }, [current, params.slug, router]);

  return (
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
  );
}
