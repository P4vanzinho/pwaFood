'use client';

import { EndpointFoodApiEnum } from '@/app/enums';
import useFoodFetch from '@/app/hooks/useFoodFetch';

export default function Products() {
  const queryParameters = {
    injectProducts: true,
  };

  const { data: products, loading } = useFoodFetch(
    EndpointFoodApiEnum.PRODUCT_CATEGORY,
    queryParameters,
  );

  const { request: requestRegisterCategory, error } = useFoodFetch();

  const onClick = () => {
    requestRegisterCategory({
      method: 'POST',
      body: {
        businessId: 21,
        name: 'Nova Categoria do ro',
      },
      endPoint: EndpointFoodApiEnum.PRODUCT_CATEGORY,
    });
  };

  if (!products) {
    <></>;
  }

  return (
    <>
      {loading && <div>loading</div>}

      {error && <div>error</div>}

      {products?.length &&
        products.map(product => (
          <div>
            <h1>{product.name}</h1>
          </div>
        ))}

      <button onClick={onClick}>MEU BOTAOZAO</button>
    </>
  );
}
