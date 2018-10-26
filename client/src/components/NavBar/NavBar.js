import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Container from '../Container/Container';

import './NavBar.sass';

const NavBar = ({ numOfCartItems, numOfOrders }) => (
  <nav className="nav">
    <Container>
      <div className="nav__menu">
        <NavLink
          to="/store"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Store
        </NavLink>
        <NavLink
          to="/cart"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Cart
          {numOfCartItems > 0 && <span className="nav__badge">{numOfCartItems}</span>}
        </NavLink>
        <NavLink
          to="/orders"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Orders
          {numOfOrders > 0 && <span className="nav__badge">{numOfOrders}</span>}
        </NavLink>
      </div>
    </Container>
  </nav>
);

NavBar.propTypes = {
  numOfCartItems: PropTypes.number.isRequired,
  numOfOrders: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  numOfCartItems: state.cart.products.length,
  numOfOrders: state.orders.length,
});

export default withRouter(connect(mapStateToProps)(NavBar));
