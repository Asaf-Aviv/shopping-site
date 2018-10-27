import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NavBar from '../NavBar';
import Product from '../../containers/Product';
import PageNotFound from '../PageNotFound';
import Container from '../Container';

import './App.sass';

const Store = lazy(() => import('../Store'));
const Cart = lazy(() => import('../../containers/Cart'));
const Orders = lazy(() => import('../../containers/Orders'));

const App = () => (
  <Router>
    <>
      <Container>
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
          <Route path="/store/product/:productId" component={Product} />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </>
  </Router>
);

export default App;
