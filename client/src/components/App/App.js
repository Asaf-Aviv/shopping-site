import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import NavBar from '../NavBar';
import Cart from '../../containers/Cart';
import Orders from '../../containers/Orders';
import ErrorBoundary from '../ErrorBoundary';

import './App.sass';

const Store = lazy(() => import('../Store'));

const App = () => (
  <Router>
    <>
      <NavBar />
      <Switch>
        <Redirect exact from="/" to="/store" />
        <Route
          exact
          path="/store"
          render={() => (
            <Suspense fallback={null}>
              <ErrorBoundary>
                <Store />
              </ErrorBoundary>
            </Suspense>
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <ErrorBoundary>
              <Cart />
            </ErrorBoundary>
          )}
        />
        <Route
          path="/orders"
          render={() => (
            <ErrorBoundary>
              <Orders />
            </ErrorBoundary>
          )}
        />
        <Route component={() => <Redirect to="/store" />} />
      </Switch>
    </>
  </Router>
);

export default hot(module)(App);
