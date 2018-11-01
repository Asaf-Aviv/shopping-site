import axios from 'axios';
import * as types from './actionTypes';

const requestProducts = () => ({
  type: types.SEARCHBAR_REQUEST_PRODUCTS,
});

const setProducts = products => ({
  type: types.SEARCHBAR_RECEIVED_PRODUCTS,
  products,
});

const productsError = () => ({
  type: types.SEARCHBAR_ERROR,
});

export const resetSearchBar = () => ({
  type: types.RESET_SEARCHBAR,
});

export const fetchProductsByName = productName => (dispatch, getState) => {
  dispatch(requestProducts());

  return axios(`/api/store/products/search?productName=${productName}`)
    .then(({ data: products }) => {
      const { ignoreLastCall } = getState().searchBar;

      if (!ignoreLastCall) {
        dispatch(setProducts(products));
      }
    })
    .catch(() => dispatch(productsError()));
};
