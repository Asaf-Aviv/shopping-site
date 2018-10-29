import configureStore from './configureStore';
import { saveStateToStorage } from '../utils';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  saveStateToStorage({
    cart: state.cart,
    orders: state.orders,
  });
});

export default store;
