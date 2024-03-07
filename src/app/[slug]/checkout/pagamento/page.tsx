'use client';

import { getPublicUser } from '@/utils/cookiePublicUser';
import { Container, PaymentData, Total, ChangeLink } from './styles';
import Title from '@/app/components/Title';
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { inter, poppins } from '@/app/fonts';
import { useBagContext } from '@/context/bag';
import { centsToUnities } from '@/utils/money';
import useFoodFetch from '@/app/hooks/useFoodFetch';
import { EndpointFoodApiEnum } from '@/app/enums';
import {
  FoodApiBusiness,
  FoodApiDeliveryFee,
  FoodApiOrder,
} from '../../../../../types/foodApi';
import { useOrderContext } from '@/context/order';
import { isMobile } from 'react-device-detect';
import RadioButton from '@/app/components/RadioButton';

type CheckoutProps = {
  params: {
    slug: string;
  };
};

export default function Checkout({ params }: CheckoutProps) {
  const user = getPublicUser();
  const router = useRouter();
  const [deliveryFee, setDeliveryFee] = useState(800);
  const { total: totalBag, itens } = useBagContext();
  const { request: deliveryRequest, data: deliveryFeeData } =
    useFoodFetch<FoodApiDeliveryFee>();
  const { request: orderRequest, data: order } = useFoodFetch<FoodApiOrder>();

  const total = totalBag + deliveryFee;

  const [radioSelected, setRadioSelected] = useState('delivery');

  useEffect(() => {
    if (!deliveryFeeData?.deliveryFee) {
      return;
    }

    setDeliveryFee(deliveryFeeData.deliveryFee);
  }, [deliveryFeeData]);

  useEffect(() => {
    if (!totalBag) {
      router.replace(`/${params?.slug}`);
    }
  }, [totalBag, params?.slug, router]);

  const { current, setCurrent } = useOrderContext();

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

    const phoneNumber = current.business.whatsapp;
    const message = current.raw.whatsapp;

    let url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURI(message)}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURI(
          message,
        )}`;

    if (!isMobile) {
      url += `&app_absent=0`;
    }

    window.open(url);
  }, [current]);

  const radioButtonCallback = (id: string) => {
    setRadioSelected(id);
  };

  const sendOrderOnClick = () => {
    orderRequest({
      endPoint: `${params.slug}/order`,
      body: {
        user: {
          homeType: 'house',
          whatsapp: user?.whatsapp,
          name: user?.name,
          address: {
            street: user?.address?.street,
            state: user?.address?.state,
            number: user?.address?.streetNumber,
            city: user?.address?.city,
            address2: user?.address?.addressDetails,
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

  return (
    <Container>
      <div className={poppins.className}>
        <Title>Pagamento</Title>

        <PaymentData>
          <div>
            <label className={poppins.className}>Método de pagamento</label>
            {radioSelected === 'delivery' && (
              <ChangeLink
                className={poppins.className}
                href={`/${params?.slug}/checkout/pagamento/alterar`}
              >
                alterar
              </ChangeLink>
            )}
          </div>
          <section>
            <p>Cartão de crédito</p>

            <div>
              <p>Trazer maquininha de cartão</p>
            </div>

            <p>Mastercard</p>
          </section>
        </PaymentData>
      </div>
      <footer>
        <Total className={inter.className}>
          <label>Total</label>
          <div>
            {!!deliveryFee && (
              <caption>
                frete +
                {centsToUnities(deliveryFee).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </caption>
            )}
            <span>
              {centsToUnities(total).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </Total>
        <Button text="Enviar pedido" onClick={sendOrderOnClick} />
      </footer>
    </Container>
  );
}
