import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Product from '../../containers/Product/Product';
import PageNotFound from '../PageNotFound/PageNotFound';
import Container from '../Container/Container';

import './App.sass';

const Store = lazy(() => import('../Store/Store'));
const Cart = lazy(() => import('../../containers/Cart/Cart'));
const Orders = lazy(() => import('../../containers/Orders/Orders'));

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
