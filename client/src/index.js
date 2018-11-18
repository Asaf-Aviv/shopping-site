import 'intersection-observer';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';

render(
  <Provider store={store}>
    <ErrorBoundary
      render={() => <h3 className="error">Oooops our App crushed :O</h3>}
    >
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
