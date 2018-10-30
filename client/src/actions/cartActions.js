import * as types from './actionTypes';

const updateCartTotal = () => ({
  type: types.UPDATE_CART_TOTAL,
});

const removeFromCart = productIndex => ({
  type: types.REMOVE_FROM_CART,
  productIndex,
});

const addToCart = product => ({
  type: types.ADD_TO_CART,
  product,
});

export const resetCart = () => ({
  type: types.RESET_CART,
});

export const addToCartHandler = product => (dispatch) => {
  dispatch(addToCart(product));
  dispatch(updateCartTotal());
};

export const removeFromCartHandler = productIndex => (dispatch) => {
  console.log('dispatching');
  console.log(productIndex);
  dispatch(removeFromCart(productIndex));
  dispatch(updateCartTotal());
};
