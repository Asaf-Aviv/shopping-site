import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDown from '../DropDown';

class SizePicker extends Component {
  static propTypes = {
    sizes: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number, PropTypes.string,
    ])).isRequired,
    chooseSizeHandler: PropTypes.func.isRequired,
    chosenSize: PropTypes.number.isRequired,
  }

  chooseSize = (e) => {
    const { chooseSizeHandler } = this.props;
    chooseSizeHandler(e.target.value);
  }

  render() {
    const { sizes, chosenSize } = this.props;

    if (!sizes.length) return null;

    return (
      <div className="size-picker">
        <DropDown
          items={sizes}
          chosen={chosenSize}
          chooseHandler={this.chooseSize}
          text="Size"
        />
      </div>
    );
  }
}

export default SizePicker;
