import React from 'react';
import PropTypes from 'prop-types';
import StickyCartItemDetails from '../StickyCartItemDetails';
import ProductImage from '../ProductImage';

const StickyCartItem = ({
  color, size, quantity, image, name, removeProduct,
}) => (
  <li className="sticky-cart__item">
    <div className="sticky-cart__img">
      <ProductImage
        imgName={image}
        alt={name}
      />
    </div>
    <span className="sticky-cart-item__name">{name}</span>
    <StickyCartItemDetails
      color={color}
      size={size}
      quantity={quantity}
    />
    <button
      type="button"
      className="sticky-cart__btn"
      onClick={removeProduct}
    >
      X
    </button>
  </li>
);

StickyCartItem.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default StickyCartItem;
