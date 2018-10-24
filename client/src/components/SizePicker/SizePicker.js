import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createListItem } from '../../utils/utils';

import './SizesPicker.sass';

class SizePicker extends Component {
  static propTypes = {
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    chooseSizeHandler: PropTypes.func.isRequired,
    chosenSize: PropTypes.number.isRequired,
  }

  state = {
    isOpen: false,
  }

  openSelect = (e) => {
    if (e.keyCode === 13 || !e.keyCode) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
  }

  chooseSize = (e) => {
    const { chooseSizeHandler } = this.props;
    this.setState({ isOpen: false });
    chooseSizeHandler(e.target.value);
  }

  render() {
    const { sizes, chosenSize } = this.props;
    const { isOpen } = this.state;

    if (!sizes.length) return null;

    return (
      <div className="size-picker">
        <span
          className="size-picker__chosen"
          onClick={this.openSelect}
          onKeyDown={this.openSelect}
          role="listbox"
          tabIndex="0"
        >
          {chosenSize || 'Size'}
        </span>
        <ul className={`size-picker__menu ${isOpen ? 'size-picker__menu--open' : ''}`}>
          {sizes.map(size => createListItem(chosenSize === size, size, this.chooseSize, 'size-picker__item'))}
        </ul>
      </div>
    );
  }
}

export default SizePicker;
