'use client';

import { getPublicUser, setPublicUser } from '@/utils/cookiePublicUser';
import { Container, RadioGroup } from './styles';
import Title from '@/app/components/Title';
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { poppins } from '@/app/fonts';

import RadioButton from '@/app/components/RadioButton';

type CheckoutProps = {
  params: {
    slug: string;
  };
};

export default function Checkout({ params }: CheckoutProps) {
  const user = getPublicUser();
  const router = useRouter();

  const [paymentMethodSelected, setPaymentMethodSelected] = useState<
    string | undefined
  >();
  const [paymentCardBrandSelected, setPaymentCardBrandSelected] = useState<
    string | undefined
  >();

  const paymentMethodRadioCallback = (id: string) => {
    setPaymentMethodSelected(id);
  };

  const cardBrandRadioCallback = (id: string) => {
    setPaymentCardBrandSelected(id);
  };

  const addPaymentOnClick = () => {
    setPublicUser({
      ...user,
      preferences: {
        payment: {
          method: paymentMethodSelected,
          cardBrand: paymentCardBrandSelected,
        },
      },
    });

    router.push(`/${params?.slug}/checkout/pagamento`);
  };

  const needsCardBranch =
    paymentMethodSelected === 'credit' || paymentMethodSelected === 'debit';

  const enabledButton = needsCardBranch
    ? !!(paymentMethodSelected && paymentCardBrandSelected)
    : !!paymentMethodSelected;

  useEffect(() => {
    if (paymentMethodSelected === 'pix') {
      setPaymentCardBrandSelected(undefined);
    }
  }, [paymentMethodSelected]);

  return (
    <Container>
      <div className={poppins.className}>
        <Title>Pagamento</Title>

        <RadioGroup>
          <div>
            <label className={poppins.className}>
              Selecione o método de pagamento
            </label>
          </div>

          <section>
            <RadioButton
              id="credit"
              label="Cartão de crédito"
              checked={paymentMethodSelected === 'credit'}
              onCallback={paymentMethodRadioCallback}
            />
            <RadioButton
              id="debit"
              label="Cartão de débito"
              checked={paymentMethodSelected === 'debit'}
              onCallback={paymentMethodRadioCallback}
            />
            <RadioButton
              id="pix"
              label="Pix"
              checked={paymentMethodSelected === 'pix'}
              onCallback={paymentMethodRadioCallback}
            />
          </section>
        </RadioGroup>

        {needsCardBranch && (
          <RadioGroup>
            <div>
              <label className={poppins.className}>
                Selecione a bandeira do cartão
              </label>
            </div>

            <section>
              <RadioButton
                id="master"
                label="Mastercard"
                checked={paymentCardBrandSelected === 'master'}
                onCallback={cardBrandRadioCallback}
              />
              <RadioButton
                id="visa"
                label="VISA"
                checked={paymentCardBrandSelected === 'visa'}
                onCallback={cardBrandRadioCallback}
              />
              <RadioButton
                id="elo"
                label="Elo"
                checked={paymentCardBrandSelected === 'elo'}
                onCallback={cardBrandRadioCallback}
              />
            </section>
          </RadioGroup>
        )}
      </div>
      <footer>
        <Button
          disabled={!enabledButton}
          text="Alterar modo de pagamento"
          onClick={addPaymentOnClick}
        />
      </footer>
    </Container>
  );
}
