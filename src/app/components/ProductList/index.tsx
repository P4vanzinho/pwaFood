import ProductCard from '../ProductCard';
import { Container } from './styles';
import { FoodApiProduct } from '../../../../types/foodApi';

type ProductListProps = {
  products: FoodApiProduct[];
  mode: 'private' | 'public';
};

export default function ProductList({ products, mode }: ProductListProps) {
  return (
    <Container>
      {!!products?.length &&
        products.map(product => (
          <ProductCard key={product.id} mode={mode} data={product} />
        ))}
    </Container>
  );
}
