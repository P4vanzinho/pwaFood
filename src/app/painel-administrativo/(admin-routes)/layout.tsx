'use client';

import AuthHeader from '@/app/components/AuthHeader';
import { ReactNode } from 'react';

import { styled } from '@linaria/react';
import FloatMenu from '@/app/components/FloatMenu';

const Container = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
`;

type AuthHeaderProps = {
  children: ReactNode;
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 3.2rem 2.4rem;
  border: lighten(0.34, #222);
  border-radius: 12px;
`;

export default function PrivateLayout({ children }: AuthHeaderProps) {
  return (
    <Container>
      <AuthHeader />
      <Main>{children}</Main>
      <FloatMenu />
    </Container>
  );
}
