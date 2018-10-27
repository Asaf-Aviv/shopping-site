import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartItemPropTypes } from '../../PropTypes/propTypes';

const CartItem = ({ product, productIndex, removeFromCartHandler }) => {
  const removeFromCart = () => removeFromCartHandler(productIndex);

  return (
    <div>
      <Link to={`/store/product/${product._id}`}>{product.name}</Link>
      <h1>{product.color}</h1>
      <h1>{product.size}</h1>
      <p>{product.quantity}</p>
      <p>{product.description}</p>
      <button type="button" onClick={removeFromCart}>Remove</button>
    </div>
  );
};

CartItem.propTypes = {
  product: CartItemPropTypes.isRequired,
  productIndex: PropTypes.number.isRequired,
  removeFromCartHandler: PropTypes.func.isRequired,
};

export default CartItem;
