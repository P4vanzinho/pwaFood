import {
  Container,
  SelectCategorySection,
  CardFoodContainer,
  NotImageContainer,
} from './styles';
import { bebas_neue, poppins } from '../../fonts';
import { useSession } from 'next-auth/react';
import { Image } from 'next/dist/client/image-component';
import useFoodFetch from '@/app/hooks/useFoodFetch';
import { EndpointFoodApiEnum } from '@/app/enums';
import { BsImage } from 'react-icons/bs';

interface Product {
  id: number;
  name: string;
  price: string;
  upload: {
    url: string;
  };
}

interface Category {
  id: number;
  name: string;
  businessId: number;
  product: Array<Product>;
}

export default function CategoryContainer() {
  const { data: session } = useSession();

  const { data: categories } = useFoodFetch(
    EndpointFoodApiEnum.PRODUCT_CATEGORY,
    {
      injectProducts: true,
      hasProducts: true,
      businessId: session?.data.business[0]?.id,
    },
  ) as { data: Category[]; error: any };

  return (
    <Container>
      {categories?.map(
        category =>
          category.product.length > 0 && (
            <SelectCategorySection key={category?.id}>
              <h1 className={bebas_neue.className}>{category.name}</h1>
              <div>
                {category.product.map(product => (
                  <CardFoodContainer key={product.id}>
                    {product.upload?.url ? (
                      <Image
                        src={product.upload?.url}
                        alt="Imagem da comida"
                        height={157}
                        width={157}
                      />
                    ) : (
                      <NotImageContainer>
                        <BsImage size={160} />
                      </NotImageContainer>
                    )}

                    <h2 className={poppins.className}>{product.name}</h2>
                    <span className={bebas_neue.className}>
                      $ {product.price}
                    </span>
                  </CardFoodContainer>
                ))}
              </div>
            </SelectCategorySection>
          ),
      )}
    </Container>
  );
}
