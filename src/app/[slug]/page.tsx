'use client';

import CategoryList from '../components/CategoryList';
import styled from 'styled-components';
import Text from '../components/Text';
import AppContext from '@/context';
import { useContext } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;

  > div {
    margin: 10px 0px 20px;

    p {
      margin-left: 5px;
    }

    span {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }
`;

type HomeProps = {
  params: {
    slug: string;
  };
};

export default function Home(props: HomeProps) {
  return (
    <Container>
      <div>
        <Text>
          Olá, <span>Rogério!</span>
        </Text>
      </div>
      <CategoryList businessId={props.params.slug} />
    </Container>
  );
}
