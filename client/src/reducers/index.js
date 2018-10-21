import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import ordersReducer from './ordersReducer';

export default combineReducers({
  store: productReducer,
  cart: cartReducer,
  orders: ordersReducer,
});
