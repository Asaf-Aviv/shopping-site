import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../DropDown';
import { ColorPropTypes } from '../../PropTypes';


const ColorPicker = ({ colors, chosenColor, chooseColorHandler }) => {
  const chooseColor = (e) => {
    const colorName = e.target.getAttribute('value');
    const newChosenColor = colors.find(colorObj => colorObj.color === colorName);
    chooseColorHandler(newChosenColor);
  };

  if (!colors.length) return null;

  return (
    <div className="color-picker">
      <DropDown
        items={colors.map(({ color }) => color)}
        chosen={chosenColor.color || ''}
        chooseHandler={chooseColor}
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
};

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(ColorPropTypes).isRequired,
  chosenColor: ColorPropTypes.isRequired,
  chooseColorHandler: PropTypes.func.isRequired,
};

export default ColorPicker;
