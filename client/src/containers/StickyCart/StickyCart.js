import React from 'react';
import PropTypes from 'prop-types';
import StickyCartHeader from '../../components/StickyCartHeader/StickyCartHeader';
import StickyCartItem from '../../components/StickyCartItem/StickyCartItem';
import List from '../../components/List/List';

import './StickyCart.sass';

const StickyCart = ({ cart, removeFromCartHandler }) => (
  <div className="sticky-cart">
    <StickyCartHeader totalPrice={cart.totalPrice} />
    {cart.products.length
      ? (
        <List classes="sticky-cart__list">
          {cart.products.map((item, i) => (
            <StickyCartItem
              key={`${item.product._id}${item.color}${item.size}`}
              image={item.product.image}
              name={item.product.name}
              color={item.color}
              size={item.size}
              quantity={item.quantity}
              removeProduct={() => removeFromCartHandler(i)}
            />
          ))}
        </List>
      )
      : <h2 className="sticky-cart__empty">Your cart is empty :(</h2>
    }
  </div>
);

StickyCart.propTypes = {
  cart: PropTypes.shape({}).isRequired,
  removeFromCartHandler: PropTypes.func.isRequired,
};

export default StickyCart;
