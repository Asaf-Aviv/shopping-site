const initialState = {
  products: {
    productsList: [],
    isFetching: false,
    error: false,
    showingAllProducts: false,
    page: 0,
  },
  chosenProduct: {
    data: {},
    isFetching: false,
    error: false,
  },
};

const replaceProduct = (products, updatedProduct) => {
  const productIndex = products.findIndex(product => product._id === updatedProduct._id);
  if (productIndex === -1) return products;

  return [
    ...products.slice(0, productIndex),
    updatedProduct,
    ...products.slice(productIndex + 1),
  ];
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_PRODUCTS':
      return {
        ...state,
        products: {
          ...state.products,
          isFetching: true,
          error: false,
        },
      };
    case 'UPDATE_PRODUCTS':
      return {
        ...state,
        products: {
          productsList: [...state.products.productsList, ...action.products],
          isFetching: false,
          error: false,
          page: state.products.page + 1,
        },
      };
    case 'REQUEST_PRODUCTS_ERROR':
      return {
        ...state,
        products: {
          ...state.products,
          isFetching: false,
          error: true,
        },
      };
    case 'REQUEST_PRODUCT':
      return {
        ...state,
        chosenProduct: {
          data: {},
          isFetching: true,
          error: false,
        },
      };
    case 'CHOOSE_PRODUCT':
      return {
        ...state,
        chosenProduct: {
          data: { ...action.product },
          isFetching: false,
          error: false,
        },
      };
    case 'PRODUCT_NOT_FOUND':
      return {
        ...state,
        chosenProduct: {
          data: {},
          isFetching: false,
          error: true,
        },
      };
    case 'MODIFY_PRODUCT':
      return {
        ...state,
        products: {
          ...state.products,
          productsList: replaceProduct(state.products.productsList, action.updatedProduct),
        },
      };
    default:
      return state;
  }
};
