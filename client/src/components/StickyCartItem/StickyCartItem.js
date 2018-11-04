import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StickyCartItemDetails from '../StickyCartItemDetails';
import ProductImage from '../ProductImage';

const StickyCartItem = ({ item, removeProduct }) => (
  <li className="sticky-cart__item">
    <div className="sticky-cart__img">
      <ProductImage
        imgName={item.product.image}
        alt={item.product.name}
      />
    </div>
    <Link
      to={`/store/product/${item.product._id}`}
      className="sticky-cart__link"
    >
      {item.product.name}
    </Link>
    <StickyCartItemDetails
      color={item.color}
      size={item.size}
      quantity={item.quantity}
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
  item: PropTypes.shape({}).isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default StickyCartItem;
