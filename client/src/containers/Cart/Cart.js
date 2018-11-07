import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartItemPropTypes } from '../../PropTypes';
import OrderItemSummary from '../../components/OrderItemSummary';
import List from '../../components/List';
import Container from '../../components/Container';

import './Cart.sass';

const Cart = ({ cart, orderHandler, removeFromCartHandler }) => {
  const submitOrder = () => {
    orderHandler(cart.products);
  };

  if (!cart.products.length) {
    return (
      <main>
        <Container>
          <h1 className="weight-300">Your cart is empty!</h1>
          <Link to="/store" className="btn btn--primary">Shop Now!</Link>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container>
        <h1 className="weight-300">My Cart</h1>
        <List classes="border-radius shadow">
          {cart.products.map((item, i) => (
            <OrderItemSummary
              key={`${item._id}${item.color}${item.size}`}
              item={item}
              removeProduct={() => removeFromCartHandler(i)}
            />
          ))}
        </List>
        <div className="cart-total">
          <h3 className="cart-total__title">{`Total: ${cart.totalPrice}$`}</h3>
          <button
            type="button"
            onClick={submitOrder}
            className="btn btn--primary"
          >
            Order
          </button>
        </div>
      </Container>
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
