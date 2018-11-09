import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartItemPropTypes } from '../../PropTypes';
import OrderItemSummary from '../../components/OrderItemSummary';
import Container from '../../components/Container';

import './Cart.sass';

const Cart = ({
  products, totalPrice, orderHandler, removeFromCartHandler,
}) => {
  const submitOrder = () => orderHandler(products);

  if (!products.length) {
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
        <ul className="border-radius shadow">
          {products.map((item, i) => (
            <OrderItemSummary
              key={`${item.product._id}${item.color}${item.size}`}
              item={item}
              productIndex={i}
              removeProduct={removeFromCartHandler}
            />
          ))}
        </ul>
        <div className="cart-total">
          <h3 className="cart-total__title">{`Total: ${totalPrice}$`}</h3>
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
  products: PropTypes.arrayOf(CartItemPropTypes).isRequired,
  totalPrice: PropTypes.number.isRequired,
  orderHandler: PropTypes.func.isRequired,
  removeFromCartHandler: PropTypes.func.isRequired,
};

export default Cart;
