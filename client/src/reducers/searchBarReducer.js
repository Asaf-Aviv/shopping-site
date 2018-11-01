const initialState = {
  products: [],
  isFetching: false,
  error: false,
  ignoreLastCall: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCHBAR_REQUEST_PRODUCTS':
      return {
        ...state,
        isFetching: true,
        error: false,
        ignoreLastCall: false,
      };
    case 'SEARCHBAR_RECEIVED_PRODUCTS':
      return {
        products: action.products,
        isFetching: false,
        error: false,
      };
    case 'SEARCHBAR_ERROR':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case 'RESET_SEARCHBAR':
      return {
        ...initialState,
        ignoreLastCall: true,
      };
    default:
      return state;
  }
};
