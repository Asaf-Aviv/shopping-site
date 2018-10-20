import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';
import Product from '../../containers/Product/Product';
import Cart from '../../containers/Cart/Cart';
import Orders from '../../containers/Orders/Orders';
import PageNotFound from '../PageNotFound/PageNotFound';

import './App.sass';

const App = () => (
  <Router>
    <>
      <NavBar />
      <Switch>
        <Redirect exact from="/" to="/store" />
        <Route exact path="/store" component={Store} />
        <Route path="/cart" component={Cart} />
        <Route path="/orders" component={Orders} />
        <Route path="/store/product/:productId" component={Product} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  </Router>
);

export default App;
