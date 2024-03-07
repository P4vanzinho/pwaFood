'use client';

import { getPublicUser } from '@/utils/cookiePublicUser';
import {
  Container,
  DeliveryData,
  Total,
  ChangeLink,
  DeliveryMethod,
} from './styles';
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
} from '../../../../../types/foodApi';
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
  const { request: businessRequest, data: business } =
    useFoodFetch<FoodApiBusiness>();
  const total = totalBag + deliveryFee;

  const [radioSelected, setRadioSelected] = useState('delivery');

  useEffect(() => {
    if (radioSelected === 'delivery') {
      if (deliveryFeeData) {
        setDeliveryFee(deliveryFeeData.deliveryFee);
        return;
      }

      deliveryRequest({
        endPoint: `${params.slug}/${EndpointFoodApiEnum.ORDER}/delivery-fee`,
        params: {
          cep: user?.address?.cep,
          city: user?.address?.city,
          neighborhood: user?.address?.neighborhood,
          street: user?.address?.street,
          streetNumber: user?.address?.streetNumber,
          whatsapp: user?.whatsapp,
          name: user?.name,
          state: user?.address?.state,
        },
      });
    } else if (radioSelected === 'pickup') {
      setDeliveryFee(0);

      if (!business) {
        businessRequest({
          endPoint: `${EndpointFoodApiEnum.BUSINESS}/${params.slug}`,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioSelected]);

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

  const radioButtonCallback = (id: string) => {
    setRadioSelected(id);
  };

  const deliveryAddressData = {
    street:
      radioSelected === 'delivery'
        ? user?.address?.street
        : business?.address?.street,
    streetNumber:
      radioSelected === 'delivery'
        ? user?.address?.streetNumber
        : business?.address?.number,
    neighborhood:
      radioSelected === 'delivery'
        ? user?.address?.neighborhood
        : business?.address?.neighborhood,
    addressDetails:
      radioSelected === 'delivery' ? user?.address?.addressDetails : '',
    city:
      radioSelected === 'delivery'
        ? user?.address?.city
        : business?.address?.city,
    state:
      radioSelected === 'delivery'
        ? user?.address?.state
        : business?.address?.state,
  };

  return (
    <Container>
      <div className={poppins.className}>
        <Title>Entrega</Title>

        <DeliveryData>
          <div>
            <label className={poppins.className}>Dados de entrega</label>
            {radioSelected === 'delivery' && (
              <ChangeLink
                className={poppins.className}
                href={`/${params?.slug}/checkout/entrega/alterar`}
              >
                alterar
              </ChangeLink>
            )}
          </div>

          {user && (
            <section>
              <p>{user?.name}</p>

              <div>
                <p>
                  {`${deliveryAddressData.street}, ${
                    deliveryAddressData.streetNumber
                  }, ${deliveryAddressData.neighborhood}. ${
                    deliveryAddressData.addressDetails ?? ''
                  } ${deliveryAddressData.city}/${deliveryAddressData.state}`}
                </p>
              </div>

              <p>{user?.whatsapp ?? ''}</p>
            </section>
          )}
        </DeliveryData>

        <DeliveryMethod>
          <div>
            <label className={poppins.className}>Método de entrega</label>
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
            <RadioButton
              id="delivery"
              label="Entrega a domicílio"
              checked={radioSelected === 'delivery'}
              onCallback={radioButtonCallback}
            />
            <RadioButton
              id="pickup"
              label="Retirar no estabelecimento"
              checked={radioSelected === 'pickup'}
              onCallback={radioButtonCallback}
            />
          </section>
        </DeliveryMethod>
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
        <Button
          text="Confirmar dados de entrega"
          onClick={() => router.push(`/${params?.slug}/checkout/pagamento`)}
        />
      </footer>
    </Container>
  );
}
