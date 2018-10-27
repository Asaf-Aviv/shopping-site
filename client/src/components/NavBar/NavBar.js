import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '../Container';

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

export default NavBar;
