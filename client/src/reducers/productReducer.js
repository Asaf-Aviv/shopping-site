const initialState = {
  products: {
    productsList: [],
    isFetching: false,
    error: false,
    isLastPage: false,
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

const removeReview = (products, productId, reviewId) => {
  const productIndex = products.findIndex(product => product._id === productId);
  if (productIndex === -1) return products;

  const productObj = products[productIndex];

  return [
    ...products.slice(0, productIndex),
    { ...productObj, reviews: productObj.reviews.filter(review => review._id !== reviewId) },
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
          isLastPage: action.products.length < 6,
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
    case 'RESET_PRODUCTS':
      return initialState;
    case 'MODIFY_PRODUCT':
      return {
        ...state,
        products: {
          ...state.products,
          productsList: replaceProduct(state.products.productsList, action.updatedProduct),
        },
      };
    case 'REMOVE_REVIEW':
      return {
        ...state,
        products: {
          ...state.products,
          productsList: removeReview(
            state.products.productsList, action.productId, action.reviewId,
          ),
        },
      };
    default:
      return state;
  }
};
