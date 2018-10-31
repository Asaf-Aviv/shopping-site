import React from 'react';
import PropTypes from 'prop-types';

const StickyCartItemDetails = ({ color, size, quantity }) => (
  <div className="sticky-cart__details">
    <span className="sticky-cart__details-item">{`Color: ${color}`}</span>
    {size && <span className="sticky-cart__details-item">{`Size: ${size}`}</span> }
    <span className="sticky-cart__details-item">{`Quantity: ${quantity}`}</span>
  </div>
);

StickyCartItemDetails.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
  quantity: PropTypes.number.isRequired,
};

StickyCartItemDetails.defaultProps = {
  size: null,
};

export default StickyCartItemDetails;
