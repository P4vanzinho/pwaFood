"use client";

import { getPublicUser, setPublicUser } from "@/utils/cookiePublicUser";
import {
  Container,
  DeliveryData,
  Total,
  ChangeLink,
  DeliveryMethod,
} from "./styles";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { dmsSans, inter, poppins } from "@/app/fonts";
import { useBagContext } from "@/context/bag";
import { centsToUnities } from "@/utils/money";
import useFoodFetch from "@/app/hooks/useFoodFetch";
import { EndpointFoodApiEnum } from "@/app/enums";
import {
  FoodApiBusiness,
  FoodApiDeliveryFee,
} from "../../../../../types/foodApi";
import RadioButton from "@/app/components/RadioButton";
import { useOrderContext } from "@/context/order";

type CheckoutProps = {
  params: {
    slug: string;
  };
};

export default function Checkout({ params }: CheckoutProps) {
  const user = getPublicUser();
  const router = useRouter();
  const [deliveryFee, setDeliveryFee] = useState(0);
  const { total: totalBag } = useBagContext();
  const { request: deliveryRequest, data: deliveryFeeData } =
    useFoodFetch<FoodApiDeliveryFee>();
  const { request: businessRequest, data: business } =
    useFoodFetch<FoodApiBusiness>();
  const total = totalBag + deliveryFee;

  const { setCurrentOrder } = useOrderContext();

  const [radioSelected, setRadioSelected] = useState<"delivery" | "pickup">(
    user?.preferences?.delivery?.method ?? "delivery",
  );

  useEffect(() => {
    setPublicUser({
      ...user,
      preferences: {
        ...user?.preferences,
        delivery: {
          method: radioSelected,
        },
      },
    });

    if (radioSelected === "delivery") {
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
    } else if (radioSelected === "pickup") {
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
    setRadioSelected(id as any);
  };

  const deliveryAddressData = {
    street:
      radioSelected === "delivery"
        ? user?.address?.street
        : business?.address?.street,
    streetNumber:
      radioSelected === "delivery"
        ? user?.address?.streetNumber
        : business?.address?.number,
    neighborhood:
      radioSelected === "delivery"
        ? user?.address?.neighborhood
        : business?.address?.neighborhood,
    addressDetails:
      radioSelected === "delivery" ? user?.address?.addressDetails : "",
    city:
      radioSelected === "delivery"
        ? user?.address?.city
        : business?.address?.city,
    state:
      radioSelected === "delivery"
        ? user?.address?.state
        : business?.address?.state,
  };

  const sendDataButtonOnClick = () => {
    const route = user?.preferences?.payment
      ? `/${params?.slug}/checkout/pagamento`
      : `/${params?.slug}/checkout/pagamento/alterar`;

    setCurrentOrder((order) => ({
      ...order,
      businessId: params?.slug,
      user: {
        name: user?.name,
        whatsapp: user?.whatsapp,
        address: {
          cep: user?.address?.cep,
          city: user?.address?.city,
          neighborhood: user?.address?.neighborhood,
          number: user?.address?.streetNumber,
          state: user?.address?.state,
          street: user?.address?.street,
          addressDetails: user?.address?.addressDetails,
        },
      },
      deliveryFee,
      total: totalBag + deliveryFee,
    }));

    router.push(route);
  };

  return (
    <Container>
      <div className={poppins.className}>
        <Title>Entrega</Title>

        <DeliveryData>
          <div>
            <label className={poppins.className}>Dados de entrega</label>
            {radioSelected === "delivery" && (
              <ChangeLink
                className={poppins.className}
                href={`/${params?.slug}/checkout/entrega/alterar`}
              >
                Alterar
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
                    deliveryAddressData.addressDetails ?? ""
                  } ${deliveryAddressData.city}/${deliveryAddressData.state}`}
                </p>
              </div>

              <p>{user?.whatsapp ?? ""}</p>
            </section>
          )}
        </DeliveryData>

        <DeliveryMethod>
          <div>
            <label className={poppins.className}>Método de entrega</label>
            {radioSelected === "delivery" && (
              <ChangeLink
                className={poppins.className}
                href={`/${params?.slug}/checkout/pagamento/alterar`}
              >
                Alterar
              </ChangeLink>
            )}
          </div>

          <section>
            <RadioButton
              id="delivery"
              label="Entrega a domicílio"
              checked={radioSelected === "delivery"}
              onCallback={radioButtonCallback}
            />
            <RadioButton
              id="pickup"
              label="Retirar no estabelecimento"
              checked={radioSelected === "pickup"}
              onCallback={radioButtonCallback}
            />
          </section>
        </DeliveryMethod>
      </div>
      <footer>
        <Total>
          <label className={poppins.className}>Total</label>
          <div>
            {!!deliveryFee && (
              <caption className={dmsSans.className}>
                entrega +{centsToUnities(deliveryFee)}
              </caption>
            )}
            <span className={poppins.className}>{centsToUnities(total)}</span>
          </div>
        </Total>
        <Button
          text="Confirmar dados"
          onClick={sendDataButtonOnClick}
          className={poppins.className}
        />
      </footer>
    </Container>
  );
}
