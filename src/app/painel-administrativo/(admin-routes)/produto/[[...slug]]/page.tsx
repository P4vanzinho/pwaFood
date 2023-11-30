'use client';

import { Container } from '../../produtos/styles';

type ProductProps = {
  params: {
    slug: string;
  };
};

export default function Product(props: ProductProps) {
  const mode = props?.params?.slug ? 'edit' : 'register';

  return <Container>mode {mode}</Container>;
}
