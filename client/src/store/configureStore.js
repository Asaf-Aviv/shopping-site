import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import { loadStateFromStorage } from '../utils';

export default () => {
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

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
};
