import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartItemPropTypes } from '../../PropTypes';
import OrderItemSummary from '../../components/OrderItemSummary';
import List from '../../components/List';

const Cart = ({ cart, orderHandler, removeFromCartHandler }) => {
  const submitOrder = () => {
    orderHandler(cart.products);
  };

  if (!cart.products.length) {
    return (
      <main>
        <h1>Your cart is empty!</h1>
        <Link to="/store">Shop Now!</Link>
      </main>
    );
  }

  return (
    <main>
      <h1 className="cart__title">My Cart</h1>
      <List>
        {cart.products.map((item, i) => (
          <OrderItemSummary
            key={`${item._id}${item.color}${item.size}`}
            item={item}
            removeProduct={() => removeFromCartHandler(i)}
          />
        ))}
      </List>
      <h1>{cart.totalPrice}</h1>
      <button type="button" onClick={submitOrder}>Submit Order</button>
    </main>
  );
};

Cart.propTypes = {
  cart: PropTypes.shape({
    products: PropTypes.arrayOf(CartItemPropTypes),
    totalPrice: PropTypes.number,
  }).isRequired,
  orderHandler: PropTypes.func.isRequired,
  removeFromCartHandler: PropTypes.func.isRequired,
};

export default Cart;
