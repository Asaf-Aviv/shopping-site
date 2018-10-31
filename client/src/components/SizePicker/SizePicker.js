import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../DropDown';

const SizePicker = ({ sizes, chosenSize, chooseSizeHandler }) => {
  const chooseSize = (e) => {
    chooseSizeHandler(e.target.value);
  };

  if (!sizes.length) return null;

  return (
    <div className="size-picker">
      <DropDown
        items={sizes}
        chosen={chosenSize}
        chooseHandler={chooseSize}
        text="Size"
      />
    </div>
  );
};

SizePicker.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ])).isRequired,
  chooseSizeHandler: PropTypes.func.isRequired,
  chosenSize: PropTypes.number.isRequired,
};

export default SizePicker;
