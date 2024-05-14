"use client";

import CategoryList from "../components/CategoryList";
import Text from "../components/Text";
import useFoodFetch from "../hooks/useFoodFetch";
import { FoodApiBusiness } from "../../../types/foodApi";
import { EndpointFoodApiEnum } from "../enums";
import Image from "next/image";
import { poppins, dmsSans } from "../fonts";
import { theme } from "../styles/theme";
import { styled } from "@linaria/react";
import { getPublicUser } from "@/utils/cookiePublicUser";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1rem 1rem;
  background-color: ${theme.COLORS.LIGHT};
  margin-top: 100px;
`;

type HomeProps = {
  params: {
    slug: string;
  };
};

export default function Home(props: HomeProps) {
  const isSlugPage = !!props?.params?.slug;

  const { data } = useFoodFetch<FoodApiBusiness>(
    `${EndpointFoodApiEnum.BUSINESS}/${props.params.slug}`,
  );

  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // Extrai o slug do pathname atual

  // Verifica se a rota atual corresponde à rota base /app/[slug]
  const isAppSlugRoute = pathname.startsWith("/app/") && slug !== undefined;

  return (
    <Container>
      <CategoryList businessId={props.params.slug} />
    </Container>
  );
}
