import React from 'react';
import PropTypes from 'prop-types';
import StickyCartHeader from '../../components/StickyCartHeader';
import StickyCartItem from '../../components/StickyCartItem';

import './StickyCart.sass';

const StickyCart = ({ products, removeFromCartHandler }) => (
  <div className="sticky-cart">
    <StickyCartHeader />
    {products.length
      ? (
        <ul classes="sticky-cart__list">
          {products.map((item, i) => (
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
        </ul>
      )
      : <h2 className="sticky-cart__empty">Your cart is empty :(</h2>
    }
  </div>
);

StickyCart.propTypes = {
  products: PropTypes.shape({}).isRequired,
  removeFromCartHandler: PropTypes.func.isRequired,
};

export default StickyCart;
