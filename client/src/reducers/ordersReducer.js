export default (state = [], action) => {
  switch (action.type) {
    case 'ORDER_RECEIVED':
      return [action.order, ...state];
    default:
      return state;
  }
};
