import axios from 'axios';
import * as types from './actionTypes';
import { modifyProduct, removeReview } from './productActions';

const processReview = () => ({
  type: types.SENDING_REVIEW,
});

const reviewReceived = () => ({
  type: types.REVIEW_RECEIVED,
});

const reviewError = () => ({
  type: types.REVIEW_ERROR,
});

const deleteRequest = () => ({
  type: types.DELETE_REQUEST,
});

const deleteSuccess = () => ({
  type: types.DELETE_SUCCESS,
});

const deleteError = () => ({
  type: types.DELETE_ERROR,
});

export const sendReview = (productId, review) => (dispatch) => {
  dispatch(processReview());

  return axios.post('/api/store/product/reviews', { productId, review })
    .then(({ data: updatedDoc }) => {
      dispatch(reviewReceived());
      dispatch(modifyProduct(updatedDoc));
    })
    .catch((err) => {
      console.error(err);
      dispatch(reviewError());
    });
};

export const deleteReview = (productId, reviewId) => (dispatch) => {
  dispatch(deleteRequest());

  return axios.delete('/api/store/product/reviews', { data: { productId, reviewId } })
    .then(() => {
      dispatch(deleteSuccess());
      dispatch(removeReview(productId, reviewId));
    })
    .catch(err => console.log(err), dispatch(deleteError()));
};
