const initialState = {
  products: {
    productsList: [],
    isFetching: false,
    error: false,
    showingAllProducts: false,
  },
  chosenProduct: {
    data: {},
    isFetching: false,
    error: false,
  },
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
    default:
      return state;
  }
};
