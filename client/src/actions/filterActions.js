import * as types from './actionTypes';
import { createQuery } from './queryActions';
import { resetProducts, fetchProducts } from './productActions';

const updateFilters = (group, filter) => ({
  type: types.UPDATE_FILTERS,
  group,
  filter,
});

const resetFilters = () => ({
  type: types.RESET_FILTERS,
});

export const resetFiltersAndFetchProducts = () => (dispatch) => {
  dispatch(resetFilters());
  dispatch(createQuery());
  dispatch(resetProducts());
  dispatch(fetchProducts());
};

export const updateFiltersAndProducts = (group, filter) => (dispatch) => {
  dispatch(updateFilters(group, filter));
  dispatch(createQuery());
  dispatch(resetProducts());
  dispatch(fetchProducts());
};
