import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { orderHandler } from '../../actions/orderActions';
import { CartItemPropTypes } from '../../PropTypes/propTypes';
import CartItem from '../../components/CartItem/CartItem';

const mapStateToProps = state => ({
  cart: state.cart,
});

@connect(mapStateToProps)
class Cart extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      products: PropTypes.arrayOf(CartItemPropTypes),
      totalPrice: PropTypes.number,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  submitOrder = () => {
    const { dispatch, cart: { products } } = this.props;
    dispatch(orderHandler(products));
  };

  render() {
    const { cart, dispatch } = this.props;

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
            dispatch={dispatch}
          />
        ))}
        <h1>{cart.totalPrice}</h1>
        <button type="button" onClick={this.submitOrder}>Submit Order</button>
      </div>
    );
  }
}

export default Cart;
