'use client';

import { ReactNode } from 'react';
import MenuBottom from '../components/MenuBottom';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
`;

interface PrivateLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PrivateLayoutProps) {
  return (
    <Wrapper>
      <Container>{children}</Container>
      <MenuBottom />
    </Wrapper>
  );
}
