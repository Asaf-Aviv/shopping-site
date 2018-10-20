import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/store">Store</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/orders">Orders</Link>
  </nav>
);

export default NavBar;
