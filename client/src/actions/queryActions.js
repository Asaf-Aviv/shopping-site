import * as types from './actionTypes';

const updateQuery = url => ({
  type: types.UPDATE_QUERY,
  url,
});

export const resetQuery = () => ({
  type: types.RESET_QUERY,
});

export const incPagination = () => ({
  type: types.INC_PAGINATION,
});

export const createQuery = () => (dispatch, getStore) => {
  const { filters } = getStore();

  const query = Object.keys(filters)
    .reduce((queryObj, group) => {
      const groupValues = Object.keys(filters[group])
        .filter(value => filters[group][value]);

      if (groupValues.length) {
        queryObj.push(`${group}=${groupValues.join(',')}`);
      }
      return queryObj;
    }, []).join('&');

  dispatch(updateQuery(query));
};
