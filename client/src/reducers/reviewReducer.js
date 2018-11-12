const initialState = {
  form: {
    processing: false,
    error: false,
  },
  deleting: {
    processing: false,
    error: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SENDING_REVIEW':
      return {
        ...state,
        form: {
          processing: true,
          error: false,
        },
      };
    case 'REVIEW_RECEIVED':
      return {
        ...state,
        form: {
          processing: false,
          error: false,
        },
      };
    case 'REVIEW_ERROR':
      return {
        ...state,
        form: {
          processing: false,
          error: true,
        },
      };
    case 'DELETE_REQUEST':
      return {
        ...state,
        deleting: {
          processing: true,
          error: false,
        },
      };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        deleting: {
          processing: false,
          error: false,
        },
      };
    case 'DELETE_ERROR':
      return {
        ...state,
        deleting: {
          processing: false,
          error: true,
        },
      };
    default:
      return state;
  }
};
