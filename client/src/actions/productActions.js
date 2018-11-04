import axios from 'axios';
import * as types from './actionTypes';
import { incPagination } from './queryActions';

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

const requestProduct = () => ({
  type: types.REQUEST_PRODUCT,
});

const productNotFound = () => ({
  type: types.PRODUCT_NOT_FOUND,
});

export const resetProducts = () => ({
  type: types.RESET_PRODUCTS,
});

export const fetchProducts = () => (dispatch, getState) => {
  const { query: { url, pagination } } = getState();

  dispatch(requestProducts());

  return axios(`/api/store/products/query?${url}&pagination=${pagination}`)
    .then(({ data: products }) => {
      dispatch(updateProducts(products));
      dispatch(incPagination());
    })
    .catch(() => dispatch(productsError()));
};
export const chooseProduct = product => ({
  type: types.CHOOSE_PRODUCT,
  product,
});


export const fetchProduct = productId => (dispatch) => {
  dispatch(requestProduct());

  return axios(`/api/store/product/${productId}`)
    .then(({ data: product }) => dispatch(chooseProduct(product)))
    .catch(() => dispatch(productNotFound()));
};

export const modifyProduct = updatedProduct => ({
  type: types.MODIFY_PRODUCT,
  updatedProduct,
});
