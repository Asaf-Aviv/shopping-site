import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './QuantityPicker.sass';

class QuantityPicker extends Component {
  static propTypes = {
    chosenQuantity: PropTypes.number.isRequired,
    maxQuantity: PropTypes.number.isRequired,
    chooseQuantityHandler: PropTypes.func.isRequired,
  }

  handleQuantity = (e) => {
    const { chooseQuantityHandler } = this.props;
    const operator = e.target.innerHTML;
    chooseQuantityHandler(operator);
  }

  render() {
    const { chosenQuantity, maxQuantity } = this.props;

    return (
      <>
        <p style={{ marginBottom: 10 }}>Quantity</p>
        <div className="quantity-picker">
          <button
            className="quantity-picker__btn quantity-picker__btn--negative"
            type="button"
            onClick={this.handleQuantity}
            disabled={!chosenQuantity}
          >
          -
          </button>
          <span className="quantity-picker__chosen">{chosenQuantity}</span>
          <button
            className="quantity-picker__btn quantity-picker__btn--positive"
            type="button"
            onClick={this.handleQuantity}
            disabled={chosenQuantity >= maxQuantity}
          >
          +
          </button>
        </div>
    </>
    );
  }
}

export default QuantityPicker;
