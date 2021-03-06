import React from 'react';
import PropTypes from 'prop-types';
import { OrderItemPropTypes } from '../../PropTypes';
import ProductImage from '../ProductImage';
import IconButton from '../IconButton';
import CloseIcon from '../../assets/svgs/cross-out.svg';

import './OrderItemSummary.sass';

const OrderItemSummary = ({ item, removeProduct, productIndex }) => (
  <li className="order-item">
    <div className="order-item__img">
      <ProductImage
        imgName={item.product.image}
        alt={item.product.name}
      />
    </div>
    <div className="order-item__wrapper">
      <span className="order-item__name">{item.product.name}</span>
      <p className="order-item__price">{item.product.description}</p>
    </div>
    <div className="order-item__details">
      <span className="details__item">{`Color: ${item.color}`}</span>
      <span className="details__item">{`Size: ${item.size}`}</span>
      <span className="details__item">{`Quantity: ${item.quantity}`}</span>
    </div>
    <h4>{`Total: ${(item.product.price * item.quantity).toFixed(2)}$`}</h4>
    {removeProduct && (
      <IconButton
        onClick={() => removeProduct(productIndex)}
        classes="remove-btn"
        width={30}
        height={30}
      >
        <CloseIcon style={{ height: '100%', padding: 5 }} />
      </IconButton>
    )}
  </li>
);

OrderItemSummary.propTypes = {
  item: OrderItemPropTypes.isRequired,
  productIndex: PropTypes.number,
  removeProduct: PropTypes.func,
};

OrderItemSummary.defaultProps = {
  removeProduct: null,
  productIndex: null,
};

export default OrderItemSummary;
