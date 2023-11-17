'use client';

import useFoodFetch from '@/app/hooks/useFoodFetch';
import { Container } from './styles';
import Image from 'next/image';
import { EndpointFoodApiEnum } from '@/app/enums';
import Title from '@/app/components/Title';
import Text from '@/app/components/Text';
import { FoodApiProduct } from '../../../../../types/foodApi';
import Button from '@/app/components/Button';
import InputQty from '@/app/components/InputQty';
import { useContext, useState } from 'react';
import Price from '@/app/components/Price';
import BagContext, { BagContextProvider } from '@/context/bag';
import { useRouter } from 'next/navigation';

type ProductProps = {
  params: {
    slug: string;
    productId: string;
  };
};

export default function Product(props: ProductProps) {
  const [qty, setQty] = useState(0);
  const { addItem } = useContext(BagContext);
  const router = useRouter();

  const inputQtyCallback = (value: number) => {
    setQty(value);
  };

  const { data: product } = useFoodFetch<FoodApiProduct>(
    EndpointFoodApiEnum.PRODUCT,
    {
      businessId: props.params.slug,
      productId: props.params.productId,
    },
    false,
  );

  const subTotal = product?.price ? qty * Number(product.price) : 0;

  const buttonOnClick = () => {
    const item = {
      id: product?.slug as string,
      qty,
      unityPrice: Number(product?.price),
      photo: product?.upload?.url,
      title: product?.name as string,
    };

    addItem(item);

    router.push(`/${props.params.slug}/sacola`);
  };

  return (
    <BagContextProvider>
      <Container>
        {!!product && (
          <>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={product.upload?.url as any}
              alt={`${product.slug} image`}
            />

            <div>
              <Title>{product.name}</Title>
              <Text>{product.description}</Text>
            </div>

            <footer>
              <div>
                <div>
                  <InputQty callback={inputQtyCallback} initialValue={qty} />
                </div>

                <Price>{subTotal}</Price>
              </div>

              <Button
                disabled={!qty}
                text="ADICIONAR À SACOLA"
                onClick={buttonOnClick}
              />
            </footer>
          </>
        )}
      </Container>
    </BagContextProvider>
  );
}
