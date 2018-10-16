import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ColorPicker.sass';

class ColorPicker extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      quantity: PropTypes.number,
    })).isRequired,
  }

  state = {
    isOpen: false,
    chosenColor: null,
  }

  openSelect = (e) => {
    if (e.keyCode === 13 || !e.keyCode) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
  };

  chooseColor = (e) => {
    const { colors } = this.props;
    this.setState({
      isOpen: false,
      chosenColor: colors.find(colorObj => colorObj.color === e.target.value),
    });
  };

  render() {
    const { colors } = this.props;
    const { isOpen, chosenColor } = this.state;

    if (!colors.length) return null;

    return (
      <div className="color-picker">
        <p>{isOpen.toString()}</p>
        <span
          onClick={this.openSelect}
          onKeyDown={this.openSelect}
          role="listbox"
          tabIndex="0"
        >
          {chosenColor ? chosenColor.color : 'Select'}
        </span>
        <ul className={`color-picker__menu ${isOpen ? 'color-picker__menu--open' : ''}`}>
          {colors.map(colorObj => (
            <li
              tabIndex="0"
              role="option"
              aria-selected={chosenColor && chosenColor.color === colorObj.color}
              onClick={this.chooseColor}
              onKeyDown={this.chooseColor}
              key={colorObj.color}
              value={colorObj.color}
            >
              {colorObj.color}
            </li>
          ))}
        </ul>
        {chosenColor && <p>{`Only ${chosenColor.quantity} left!`}</p>}
      </div>
    );
  }
}

export default ColorPicker;
