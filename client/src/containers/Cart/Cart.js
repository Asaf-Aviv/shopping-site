import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartItemPropTypes } from '../../PropTypes';
import CartItem from '../../components/CartItem';

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      products: PropTypes.arrayOf(CartItemPropTypes),
      totalPrice: PropTypes.number,
    }).isRequired,
    orderHandler: PropTypes.func.isRequired,
  };

  submitOrder = () => {
    const { orderHandler, cart: { products } } = this.props;
    orderHandler(products);
  };

  render() {
    const { cart } = this.props;

    if (!cart.products.length) {
      return (
        <div>
          <h1>Your cart is empty!</h1>
          <Link to="/store">Shop Now!</Link>
        </div>
      );
    }

    return (
      <div>
        {cart.products.map((product, i) => (
          <CartItem
            key={`${product._id}${product.color}${product.size}`}
            productIndex={i}
            product={product}
          />
        ))}
        <h1>{cart.totalPrice}</h1>
        <button type="button" onClick={this.submitOrder}>Submit Order</button>
      </div>
    );
  }
}

export default Cart;
