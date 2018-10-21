import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { saveStateToStorage, loadStateFromStorage } from './utils/utils';

function configureStore() {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = process.env.NODE_ENV === 'development'
    ? composeWithDevTools(...enhancers)
    : compose(...enhancers);

  const persistedState = loadStateFromStorage();

  const store = createStore(rootReducer, persistedState, composedEnhancers);

  store.subscribe(() => {
    const state = store.getState();
    saveStateToStorage({
      cart: state.cart,
      orders: state.orders,
    });
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}

const store = configureStore();

export default store;
