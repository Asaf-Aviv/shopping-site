import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import { OrderItemPropTypes } from '../../PropTypes';
import ProductImage from '../ProductImage';
import './OrderItemSummary.sass';

const OrderItemSummary = ({ item, removeProduct }) => (
  <li className="order-item">
    <Link
      to={`/store/product/${item.product._id}`}
      className="order-item__link"
    >
      {item.product.name}
    </Link>
    <div className="order-item__img">
      <ProductImage
        imgName={item.product.image}
        alt={item.product.name}
      />
    </div>
    <p className="order-item__description">{item.product.description}</p>
    <div className="order-item__details">
      <h4 className="details__item">{`Color: ${item.color}`}</h4>
      <h4 className="details__item">{`Size: ${item.size}`}</h4>
      <h4 className="details__item">{`Quantity: ${item.quantity}`}</h4>
    </div>
    <h4 className="order-item__total">
      {`Total: ${item.product.price * item.quantity}$`}
    </h4>
    {removeProduct && <button type="button" onClick={removeProduct}>Remove</button>}
  </li>
);

OrderItemSummary.propTypes = {
  item: OrderItemPropTypes.isRequired,
  removeProduct: func,
};

OrderItemSummary.defaultProps = {
  removeProduct: null,
};

export default OrderItemSummary;
