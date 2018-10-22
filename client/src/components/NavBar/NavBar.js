import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';

import './NavBar.sass';

const NavBar = () => (
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

export default NavBar;
