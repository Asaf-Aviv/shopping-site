import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StickyCartHeader = ({ totalPrice }) => (
  <header className="sticky-cart__header">
    <h3 className="sticky-cart__title">
      <Link to="/cart" className="sticky-cart__title__link">Cart</Link>
    </h3>
    <h3 className="sticky-cart__title">{`Total: ${totalPrice}$`}</h3>
  </header>
);

StickyCartHeader.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default StickyCartHeader;
