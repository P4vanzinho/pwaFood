'use client';

import AuthHeader from '@/app/components/AuthHeader';
import { lighten } from 'polished';
import { ReactNode } from 'react';
import { styled } from '@linaria/react';

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
  width: 350px;
  margin: 0 auto;
  padding: 3.2rem 2.4rem;
  border: 1px solid ${({ theme }) => lighten(0.34, theme.COLORS.GRAY)};
  border-radius: 12px;
`;

export default function AuthLayout({ children }: AuthHeaderProps) {
  return (
    <Container>
      <AuthHeader />
      <Main>{children}</Main>
    </Container>
  );
}
