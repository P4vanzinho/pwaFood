import {
  NotListProductContainer,
  Main,
  MainMenu,
  LoadingCategoriesContainer,
  CategoryMessage,
  EndOfListMessage,
} from './styles';

import CategoryContainer from '@/app/components/CategoryContainer';
import LoadingIndicator from '@/app/components/LoadingIndicator';

import { poppins } from '@/app/fonts';
import { CiFaceSmile } from 'react-icons/ci';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useFoodFetch from '@/app/hooks/useFoodFetch';
import { EndpointFoodApiEnum } from '@/app/enums';

interface Category {
  id: number;
  name: string;
  businessId: number;
}

export default function PageProductsContent({
  businessId,
}: {
  businessId: number;
}) {
  const [borderProduct, setBorderProduct] = useState<boolean>(true);
  const [borderCategory, setBorderCategory] = useState<boolean>(false);
  const [isAddButtonClicked, setIsAddButtonClicked] = useState<boolean>(false);
  const router = useRouter();

  const { data: categories, loading: categoriesLoading } = useFoodFetch(
    EndpointFoodApiEnum.PRODUCT_CATEGORY,
    {
      injectProducts: true,
      businessId: businessId,
    },
  ) as { data: Category[]; loading: any };

  return (
    <>
      {categoriesLoading ? (
        <LoadingCategoriesContainer>
          <p className={poppins.className}>
            Carregando categorias de alimentos
          </p>
          <LoadingIndicator />
        </LoadingCategoriesContainer>
      ) : (
        <>
          {categories && categories.length ? (
            <Main>
              <MainMenu>
                <button
                  className={
                    borderProduct
                      ? `${poppins.className} primaryBorder`
                      : poppins.className
                  }
                  onClick={() => {
                    setBorderProduct(true);
                    setBorderCategory(false);
                  }}
                >
                  <span>Produtos</span>
                </button>
                <button
                  className={
                    borderCategory
                      ? `${poppins.className} primaryBorder`
                      : poppins.className
                  }
                  onClick={() => {
                    setBorderProduct(false);
                    setBorderCategory(true);
                  }}
                >
                  <span>Categorias</span>
                </button>
              </MainMenu>

              <CategoryMessage className={poppins.className}>
                Produtos separados por <span>categoria</span>
              </CategoryMessage>

              <CategoryContainer />

              {!categories.length ? (
                ''
              ) : (
                <EndOfListMessage className={poppins.className}>
                  Voce chegou ao fim da lista {<CiFaceSmile size={20} />}
                </EndOfListMessage>
              )}
            </Main>
          ) : (
            <NotListProductContainer>
              <p className={poppins.className}>
                Voce ainda nao tem nenhuma categoria cadastrada. Comece criando
                uma categoria
                <span onClick={() => router.push('/admin/novacategoria')}>
                  clicando aqui!
                </span>
              </p>
            </NotListProductContainer>
          )}
        </>
      )}
    </>
  );
}
