import * as types from './actionTypes';
import { calculatePrice } from '../utils/utils';

const updateCartTotal = () => ({
  type: types.UPDATE_CART_TOTAL,
});

const removeFromCart = productIndex => ({
  type: types.REMOVE_FROM_CART,
  productIndex,
});

const addToCart = (product, color, size, quantity) => {
  const cartProduct = {
    _id: product._id,
    name: product.name,
    description: product.description,
    price: calculatePrice(product.price, product.discount),
    color,
    size,
    quantity,
  };

  return {
    type: types.ADD_TO_CART,
    product: cartProduct,
  };
};

export const resetCart = () => ({
  type: types.RESET_CART,
});

export const addToCartHandler = (product, color, size, quantity) => (dispatch) => {
  dispatch(addToCart(product, color, size, quantity));
  dispatch(updateCartTotal());
};

export const removeFromCartHandler = productIndex => (dispatch) => {
  dispatch(removeFromCart(productIndex));
  dispatch(updateCartTotal());
};
