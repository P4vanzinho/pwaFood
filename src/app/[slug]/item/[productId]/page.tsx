'use client';

import useFoodFetch from '@/app/hooks/useFoodFetch';
import { Container } from './styles';
import Image from 'next/image';
import { EndpointFoodApiEnum } from '@/app/enums';
import Title from '@/app/components/Title';
import Text from '@/app/components/Text';
import { FoodApiProduct } from '../../../../../types/foodApi';

type ProductProps = {
  params: {
    slug: string;
    productId: string;
  };
};

export default function Product(props: ProductProps) {
  const { data } = useFoodFetch<FoodApiProduct>(
    EndpointFoodApiEnum.PRODUCT,
    {
      businessId: props.params.slug,
      productId: props.params.productId,
    },
    false,
  );

  return (
    <Container>
      {!!data && (
        <>
          <Image
            src={data.upload?.url as any}
            width={500}
            height={500}
            alt={`${data.slug} image`}
          />

          <div>
            <Title>{data.name}</Title>
            <Text>{data.description}</Text>
          </div>
        </>
      )}
    </Container>
  );
}
