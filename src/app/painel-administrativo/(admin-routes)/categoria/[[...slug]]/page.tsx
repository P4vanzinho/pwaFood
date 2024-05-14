"use client";

import {
  Container,
  FormContainer,
  ToggleSwitch,
  ToggleSwitchContainer,
  Label,
  LabelToglleSwitch,
  InputCheckBoxInToggle,
  Switch,
  ButtonsContainer,
} from "./styles";
import { poppins, bebasNeue } from "@/app/fonts";
import { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useFoodFetch from "@/app/hooks/useFoodFetch";
import { useSession } from "next-auth/react";
import { EndpointFoodApiEnum, RoutesEnum } from "@/app/enums";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";
import { FoodApiCategory } from "../../../../../../types/foodApi";

type CategoryProps = {
  params: {
    slug?: string;
  };
};

export default function Category({ params }: CategoryProps) {
  const mode = params?.slug ? "edit" : "register";
  const title =
    mode === "register"
      ? "CADASTRO DE CATEGORIA DE PRODUTO"
      : "EDIÇÃO DA CATEGORIA DE PRODUTO";

  const [checked, setChecked] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");
  const { data: session } = useSession();
  const router = useRouter();
  const categorySlug = params?.slug?.[0];

  const businessId = session?.data?.business[0]?.id;

  const { request: requestRegisterCategory } = useFoodFetch<FoodApiCategory>();
  const { request: requestPatchCategory, data: responsePatchProduct } =
    useFoodFetch<FoodApiCategory>();

  const { request: getCategoryRequest, data: category } =
    useFoodFetch<FoodApiCategory>();

  function handleCategoryOnClick() {
    if (mode === "edit") {
      requestPatchCategory({
        method: "PATCH",
        body: {
          name: categoryName,
          enabled: true,
        },
        endPoint: EndpointFoodApiEnum.PRODUCT_CATEGORY,
        params: { categoryId: category?.id, businessId },
      });
    } else {
      requestRegisterCategory({
        method: "POST",
        body: {
          businessId: businessId,
          name: categoryName,
          enabled: checked,
        },
        endPoint: EndpointFoodApiEnum.PRODUCT_CATEGORY,
      });
    }
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  useEffect(() => {
    if (!responsePatchProduct) return;
    router.replace(RoutesEnum.PRODUTOS);
  }, [responsePatchProduct, router]);

  useEffect(() => {
    if (!businessId) return;
    getCategoryRequest({
      endPoint: `${EndpointFoodApiEnum.PRODUCT_CATEGORY}/${categorySlug}`,
      params: {
        businessId,
      },
    });
  }, [businessId, categorySlug, getCategoryRequest]);

  useEffect(() => {
    if (!responsePatchProduct) return;
    router.replace(RoutesEnum.PRODUTOS);
  }, [responsePatchProduct, router]);

  useEffect(() => {
    setCategoryName(category?.name || ``);
    setChecked(!!category?.enabled);
  }, [getCategoryRequest, category]);

  return (
    <Container onSubmit={handleSubmit}>
      <FormContainer>
        <Title>{title}</Title>

        <label htmlFor="title" className={bebasNeue.className}>
          Título
          <input
            id="title"
            className={poppins.className}
            type="text"
            placeholder="Dê um título à categoria"
            onChange={(e) => setCategoryName(e.target.value)}
            value={categoryName}
          />
        </label>

        <ToggleSwitchContainer>
          <ToggleSwitch>
            <p className={poppins.className}>Exibir o produto no cardapio</p>
            <LabelToglleSwitch>
              <InputCheckBoxInToggle
                type="checkbox"
                onChange={() => setChecked(!checked)}
                checked={checked}
              />
              <Switch />
            </LabelToglleSwitch>
          </ToggleSwitch>
        </ToggleSwitchContainer>

        <ButtonsContainer>
          <Button
            onClick={() => router.back()}
            className={poppins.className}
            text="Cancelar"
          />

          <Button
            type="submit"
            className={poppins.className}
            text="Salvar"
            onClick={handleCategoryOnClick}
          />
        </ButtonsContainer>
      </FormContainer>
    </Container>
  );
}
