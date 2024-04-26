"use client";

import { ReactNode } from "react";
import { styled } from "@linaria/react";
import { theme } from "@/app/styles/theme";
import { AiOutlineLeft } from "react-icons/ai";
import { poppins } from "@/app/fonts";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
  background-color: ${theme.COLORS.LIGHT};
`;

const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 6rem);
  padding: 100px 1rem 0 1rem;
`;

const HeaderNavigation = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 10px;
  align-items: center;
  justify-content: center;

  > svg {
    position: absolute;
    left: 15px;
  }

  > span {
    font-size: 0.875rem;
    color: ${theme.COLORS.DARK};
  }
`;

interface CheckoutLayoutProps {
  children: ReactNode;
  params: {
    slug: string;
  };
}

function CheckoutLayout(props: CheckoutLayoutProps) {
  const router = useRouter();

  return (
    <>
      <Wrapper>
        <Container>{props.children}</Container>
      </Wrapper>
    </>
  );
}

export default CheckoutLayout;
