import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/store">Store</Link>
    <Link to="/cart">Cart</Link>
  </nav>
);

export default NavBar;
