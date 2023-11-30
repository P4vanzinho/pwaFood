import ProductCard from '../ProductCard';
import { Container } from './styles';
import { FoodApiProduct } from '../../../../types/foodApi';

type ProductListProps = {
  products: FoodApiProduct[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <Container>
      {!!products?.length &&
        products.map(product => (
          <ProductCard key={product.id} data={product} />
        ))}
    </Container>
  );
}
