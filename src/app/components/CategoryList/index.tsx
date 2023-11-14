'use client';

import useFoodFetch from '@/app/hooks/useFoodFetch';
import { EndpointFoodApiEnum } from '@/app/enums';
import { Container } from './styles';
import { FoodApiCategory } from '../../../../types/foodApi';
import ProductList from '../ProductList';
import Title from '../Title';

type CategoryListProps = {
  businessId: number | string;
};

export default function CategoryList({ businessId }: CategoryListProps) {
  const { data: categories, loading: _categoriesLoading } = useFoodFetch(
    EndpointFoodApiEnum.PRODUCT_CATEGORY,
    {
      injectProducts: true,
      hasProducts: true,
      businessId: businessId,
    },
    false,
  ) as { data: FoodApiCategory[]; loading: any };

  return (
    <Container>
      {!!categories?.length &&
        categories.map(category => (
          <>
            <Title>{category.name}</Title>
            <ProductList key={category.id} products={category.product} />
          </>
        ))}
    </Container>
  );
}
