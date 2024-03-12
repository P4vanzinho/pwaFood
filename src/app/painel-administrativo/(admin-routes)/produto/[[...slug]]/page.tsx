'use client';

import { Container } from './styles';

import ProductPage from '@/app/components/ProductPage';

import { useSession } from 'next-auth/react';

type ProductProps = {
  params: {
    slug: string;
    productId: string;
  };
  businessId: number | string;
  mode?: 'private' | 'public';
};

export default function Product(props: ProductProps) {
  const { data: session } = useSession();
  const businessId = session?.data.business[0].id;
  const modePage = props?.params?.slug ? 'edit' : 'register';



  //Categories request

  return (
    <Container>
      {!!businessId ? (
        <ProductPage
          modePage={modePage}
          businessId={businessId}
          productId={props?.params?.slug}
        />
      ) : (
        <div>
          <h1>Crie alguma categoria de alimentos antes de criar um produto.</h1>
        </div>
      )}
    </Container>
  );
}
