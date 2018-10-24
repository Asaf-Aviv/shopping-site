import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

import './NavBar.sass';

const NavBar = ({ numOfCartItems }) => (
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
          {numOfCartItems > 0 && <span className="cart__length">{numOfCartItems}</span>}
        </NavLink>
        <NavLink
          to="/orders"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Orders
        </NavLink>
      </div>
    </Container>
  </nav>
);

NavBar.propTypes = {
  numOfCartItems: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  numOfCartItems: state.cart.products.length,
});

export default connect(mapStateToProps)(NavBar);
