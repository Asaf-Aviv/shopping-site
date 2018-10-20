export default (state = [], action) => {
  switch (action.type) {
    case 'ORDER_RECEIVED':
      return [...state, action.order];
    default:
      return state;
  }
};
