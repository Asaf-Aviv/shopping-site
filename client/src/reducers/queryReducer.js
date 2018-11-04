const initialState = {
  url: '',
  pagination: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return {
        ...state,
        url: action.url,
        pagination: 0,
      };
    case 'INC_PAGINATION':
      return {
        ...state,
        pagination: state.pagination + 1,
      };
    case 'RESET_QUERY':
      return initialState;
    default:
      return state;
  }
};
