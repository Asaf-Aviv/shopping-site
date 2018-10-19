import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div className="quantity-picker">
        <button type="button" onClick={this.handleQuantity} disabled={!chosenQuantity}>-</button>
        <span>{chosenQuantity}</span>
        <button type="button" onClick={this.handleQuantity} disabled={chosenQuantity >= maxQuantity}>+</button>
      </div>
    );
  }
}

export default QuantityPicker;
