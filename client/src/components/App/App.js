import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NavBar from '../NavBar';
import PageNotFound from '../PageNotFound';

import './App.sass';

const Store = lazy(() => import('../Store'));
const Cart = lazy(() => import('../../containers/Cart'));
const Orders = lazy(() => import('../../containers/Orders'));

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
              <Store />
            </Suspense>
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Suspense fallback={null}>
              <Cart />
            </Suspense>
          )}
        />
        <Route
          path="/orders"
          render={() => (
            <Suspense fallback={null}>
              <Orders />
            </Suspense>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </>
  </Router>
);

export default App;
