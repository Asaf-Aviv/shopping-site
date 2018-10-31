import configureStore from './configureStore';
import { saveStateToStorage } from '../utils';

const store = configureStore();

store.subscribe(() => {
  const { cart, orders } = store.getState();

  saveStateToStorage({
    cart,
    orders,
  });
});

export default store;
