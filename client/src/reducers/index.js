import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import ordersReducer from './ordersReducer';
import searchBarReducer from './searchBarReducer';
import filtersReducer from './filtersReducer';
import queryReducer from './queryReducer';
import reviewReducer from './reviewReducer';

export default combineReducers({
  store: productReducer,
  cart: cartReducer,
  orders: ordersReducer,
  searchBar: searchBarReducer,
  filters: filtersReducer,
  query: queryReducer,
  reviews: reviewReducer,
});
