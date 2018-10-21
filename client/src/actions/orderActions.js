import axios from 'axios';
import * as types from './actionTypes';
import { resetCart } from './cartActions';

const sendOrder = () => ({
  type: types.SEND_ORDER,
});

const orderReceived = order => ({
  type: types.ORDER_RECEIVED,
  order,
});

const orderError = () => ({
  type: types.ORDER_ERROR,
});

export const orderHandler = products => (dispatch) => {
  dispatch(sendOrder());

  return axios
    .post('/api/store/orders', { products })
    .then(
      ({ data: order }) => {
        dispatch(orderReceived(order));
        dispatch(resetCart());
      },
      () => dispatch(orderError()),
    );
};

export const z = '';
