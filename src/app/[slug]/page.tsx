"use client";

import CategoryList from "../components/CategoryList";

import { theme } from "../styles/theme";
import { styled } from "@linaria/react";

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
  const slug = props.params.slug;
  return (
    <Container>
      <CategoryList businessId={slug} />
    </Container>
  );
}
