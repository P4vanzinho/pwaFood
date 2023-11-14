import { FoodApiProduct } from '../../../../types/foodApi';
import Text from '../Text';
import Price from '../Price';
import { Container, PhotoFood } from './styles';

import { usePathname, useRouter } from 'next/navigation';

type FoodCardProps = {
  data: FoodApiProduct;
};

export default function FoodCard({ data }: FoodCardProps) {
  const pathname = usePathname();
  const router = useRouter();

  const cardOnClick = () => {
    router.push(`${pathname}/item/${data.slug}`);
  };

  return (
    <Container onClick={cardOnClick}>
      {!!data.upload?.url && (
        <PhotoFood
          src={data.upload.url}
          height={130}
          width={130}
          alt={data.name}
        />
      )}

      <Text>{data.name}</Text>
      <Price>{data.price ?? 'sob consulta'}</Price>
    </Container>
  );
}
