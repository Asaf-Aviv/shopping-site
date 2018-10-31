import React from 'react';
import PropTypes from 'prop-types';

import './QuantityPicker.sass';

const QuantityPicker = ({ chosenQuantity, maxQuantity, chooseQuantityHandler }) => {
  const handleQuantity = (e) => {
    const operator = e.target.innerHTML;
    chooseQuantityHandler(operator);
  };

  return (
    <div>
      <h4 className="quantity__title">Quantity</h4>
      <div className="quantity-picker">
        <button
          className="quantity-picker__btn quantity-picker__btn--negative"
          type="button"
          onClick={handleQuantity}
          disabled={!chosenQuantity}
        >
          -
        </button>
        <span className="quantity-picker__chosen">{chosenQuantity}</span>
        <button
          className="quantity-picker__btn quantity-picker__btn--positive"
          type="button"
          onClick={handleQuantity}
          disabled={chosenQuantity >= maxQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

QuantityPicker.propTypes = {
  chosenQuantity: PropTypes.number.isRequired,
  maxQuantity: PropTypes.number.isRequired,
  chooseQuantityHandler: PropTypes.func.isRequired,
};

export default QuantityPicker;
