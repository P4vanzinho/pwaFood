'use client';

import { EndpointFoodApiEnum } from '@/app/enums';
import useFoodFetch from '@/app/hooks/useFoodFetch';

export default function Products() {
  const {
    data: categories,
    loading,
    setFetchParams,
  } = useFoodFetch(EndpointFoodApiEnum.PRODUCT_CATEGORY, {
    injectProducts: false,
  });

  const { request: requestRegisterCategory, error } = useFoodFetch();

  const onClick = () => {
    setFetchParams({
      injectProducts: true,
    });

    /*  requestRegisterCategory({
      method: 'POST',
      body: {
        businessId: 21,
        name: 'Nova Categoria do ro',
      },
      endPoint: EndpointFoodApiEnum.PRODUCT_CATEGORY,
    }); */
  };

  return (
    <>
      {loading && <div>loading</div>}

      {error && <div>error</div>}

      {categories?.length &&
        categories.map(category => (
          <div>
            <h1>{category.name}</h1>
            {category.product?.map(product => product.name)}
          </div>
        ))}

      <button onClick={onClick}>MEU BOTAOZAO</button>
    </>
  );
}
