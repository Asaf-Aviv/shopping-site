import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDown from '../DropDown';
import { ColorPropTypes } from '../../PropTypes';


class ColorPicker extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(ColorPropTypes).isRequired,
    chosenColor: ColorPropTypes.isRequired,
    chooseColorHandler: PropTypes.func.isRequired,
  }

  chooseColor = (e) => {
    const { colors, chooseColorHandler } = this.props;
    const colorName = e.target.getAttribute('value');
    const chosenColor = colors.find(colorObj => colorObj.color === colorName);
    chooseColorHandler(chosenColor);
  };

  render() {
    const { colors, chosenColor } = this.props;

    if (!colors.length) return null;

    return (
      <div className="color-picker">
        <DropDown
          items={colors.map(({ color }) => color)}
          chosen={chosenColor.color || ''}
          chooseHandler={this.chooseColor}
          text="Color"
        />
        {chosenColor.quantity !== undefined
          && (chosenColor.quantity > 0
            ? <p>{`Only ${chosenColor.quantity} left!`}</p>
            : <p>Out of stock!</p>
          )
        }
      </div>
    );
  }
}

export default ColorPicker;
