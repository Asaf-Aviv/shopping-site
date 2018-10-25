import axios from 'axios';
import * as types from './actionTypes';

const requestProducts = () => ({
  type: types.REQUEST_PRODUCTS,
});

const updateProducts = products => ({
  type: types.UPDATE_PRODUCTS,
  products,
});

const productsError = () => ({
  type: types.REQUEST_PRODUCTS_ERROR,
});

export const fetchProducts = () => (dispatch, getState) => {
  const { store: { products: { page } } } = getState();
  dispatch(requestProducts());

  return axios(`/api/store/products?page=${page}`)
    .then(
      ({ data: products }) => dispatch(updateProducts(products)),
      () => dispatch(productsError()),
    );
};

const requestProduct = () => ({
  type: types.REQUEST_PRODUCT,
});

export const chooseProduct = product => ({
  type: types.CHOOSE_PRODUCT,
  product,
});

const productNotFound = () => ({
  type: types.PRODUCT_NOT_FOUND,
});

export const fetchProduct = productId => (dispatch) => {
  dispatch(requestProduct());

  return axios(`/api/store/product/${productId}`)
    .then(
      ({ data: product }) => dispatch(chooseProduct(product)),
      () => dispatch(productNotFound()),
    );
};

export const modifyProduct = updatedProduct => ({
  type: types.MODIFY_PRODUCT,
  updatedProduct,
});
