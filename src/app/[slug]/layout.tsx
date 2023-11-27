'use client';

import { ReactNode } from 'react';
import MenuBottom from '../components/MenuBottom';
import { BagContextProvider } from '@/context/bag';
import { LoadingContextProvider } from '@/context/loading';
import FullScreenLoading from '../components/FullScreenLoading';
import { OrderContextProvider } from '@/context/order';
import { styled } from '@linaria/react';
import { theme } from '../styles/theme';
import { useSearchParams } from 'next/navigation';
import { setPublicUserByToken } from '@/utils/cookiePublicUser';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  align-items: center;
  background-color: ${theme.COLORS.LIGHT};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  background-color: ${theme.COLORS.WHITE};
`;

interface PublicLayoutProps {
  children: ReactNode;
  params: {
    slug: string;
  };
}

function PublicLayout(props: PublicLayoutProps) {
  console.log(props);

  const searchParams = useSearchParams();

  const token = searchParams.get('u');

  if (token) {
    setPublicUserByToken(token);
  }

  return (
    <OrderContextProvider>
      <BagContextProvider>
        <LoadingContextProvider>
          <FullScreenLoading>
            <Wrapper>
              <Container>{props.children}</Container>
              <MenuBottom slug={props.params.slug} />
            </Wrapper>
          </FullScreenLoading>
        </LoadingContextProvider>
      </BagContextProvider>
    </OrderContextProvider>
  );
}

export default PublicLayout;
