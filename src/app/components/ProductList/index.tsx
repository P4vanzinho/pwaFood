import ProductCard from '../ProductCard';
import { Container } from './styles';
import { FoodApiProduct } from '../../../../types/foodApi';

type ProductListProps = {
  products: FoodApiProduct[];
  mode: 'public' | 'private';
};

export default function ProductList({ products, mode }: ProductListProps) {
  return (
    <Container>
      {!!products?.length &&
        products.map(product => (
          <ProductCard key={product.id} data={product} mode={mode} />
        ))}
    </Container>
  );
}
