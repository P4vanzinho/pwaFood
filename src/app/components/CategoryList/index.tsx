"use client";

import useFoodFetch from "@/app/hooks/useFoodFetch";
import { EndpointFoodApiEnum, RoutesEnum } from "@/app/enums";
import { Container, EditCategoryContainer } from "./styles";
import { FoodApiCategory } from "../../../../types/foodApi";
import ProductList from "../ProductList";
import Title from "../Title";
import { useRouter } from "next/navigation";
import { inter } from "@/app/fonts";
import React from "react";

type CategoryListProps = {
  businessId: number | string;
  mode?: "private" | "public";
};

export default function CategoryList({
  businessId,
  mode = "public",
}: CategoryListProps) {
  const router = useRouter();

  const { data: categories } = useFoodFetch(
    EndpointFoodApiEnum.PRODUCT_CATEGORY,
    {
      injectProducts: true,
      hasProducts: true,
      businessId,
    },
  ) as { data: FoodApiCategory[] };

  return (
    <Container>
      {!!categories?.length &&
        categories.map((category) => (
          <React.Fragment key={`category-${category.id}`}>
            <EditCategoryContainer key={`edit-${category.id}`}>
              <Title>{category.name}</Title>
              <button
                className={inter.className}
                onClick={() =>
                  router.push(
                    `${RoutesEnum.CATEGORIA_CADASTRO}/${category.slug}`,
                  )
                }
              >
                editar
              </button>
            </EditCategoryContainer>

            <ProductList
              key={`product-${category.id}`}
              products={category.product}
              mode={mode}
            />
          </React.Fragment>
        ))}
    </Container>
  );
}
