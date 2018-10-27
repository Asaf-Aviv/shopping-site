import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createListItem } from '../../utils';

import './ColorPicker.sass';

class ColorPicker extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      quantity: PropTypes.number,
    })).isRequired,
    chosenColor: PropTypes.shape({
      color: PropTypes.string,
      quantity: PropTypes.number,
    }).isRequired,
    chooseColorHandler: PropTypes.func.isRequired,
  }

  state = {
    isOpen: true,
  }

  toggleSelect = (e) => {
    if (e.keyCode === 13 || !e.keyCode) {
      this.setState(prevState => ({
        ...prevState,
        isOpen: !prevState.isOpen,
      }));
    }
  };

  chooseColor = (e) => {
    const { colors, chooseColorHandler } = this.props;
    const colorName = e.target.getAttribute('value');
    const chosenColor = colors.find(colorObj => colorObj.color === colorName);
    this.setState({ isOpen: false });
    chooseColorHandler(chosenColor);
  };

  render() {
    const { colors, chosenColor } = this.props;
    const { isOpen } = this.state;

    if (!colors.length) return null;

    return (
      <div className="color-picker">
        <span
          className="color-picker__chosen"
          onClick={this.toggleSelect}
          onKeyDown={this.toggleSelect}
          onBlur={this.hideSelect}
          role="listbox"
          tabIndex="0"
        >
          {chosenColor.color || 'Color'}
        </span>
        <ul className={`color-picker__menu ${isOpen ? 'color-picker__menu--open' : ''}`}>
          {colors.map((colorObj) => {
            const isSelected = chosenColor.color === colorObj.color;
            return createListItem(isSelected, colorObj.color, this.chooseColor, 'color-picker__item');
          })}
        </ul>
        {chosenColor.quantity && <p>{`Only ${chosenColor.quantity} left!`}</p>}
      </div>
    );
  }
}

export default ColorPicker;
