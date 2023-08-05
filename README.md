const {
data: categories,
loading,
setQueryBuilder,
} = useFoodFetch(EndpointFoodApiEnum.PRODUCT_CATEGORY, {
injectProducts: false,
});

const { request: requestRegisterCategory, error } = useFoodFetch();

const onClick = () => {
setQueryBuilder({
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
