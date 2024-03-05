import { ReactNode } from 'react';

import { styled } from '@linaria/react';
import FloatMenu from '@/app/components/FloatMenu';
import PrivateHeader from '@/app/components/PrivateHeader';

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
  padding: 20px 40px;
  border: lighten(0.34, #222);
  border-radius: 12px;
`;

export default function PrivateLayout({ children }: AuthHeaderProps) {
  return (
    <Container>
      <PrivateHeader />
      <Main>{children}</Main>
      <FloatMenu />
    </Container>
  );
}
