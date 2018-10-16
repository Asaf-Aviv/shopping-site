import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SizesPicker.sass';

class SizePicker extends Component {
  static propTypes = {
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  }

  state = {
    isOpen: false,
    chosenSize: null,
  }

  openSelect = (e) => {
    if (e.keyCode === 13 || !e.keyCode) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
  }

  chooseSize = e => this.setState({ isOpen: false, chosenSize: e.target.value });

  render() {
    const { sizes } = this.props;
    const { isOpen, chosenSize } = this.state;

    if (!sizes.length) return null;

    return (
      <div className="size-picker">
        <p>{isOpen.toString()}</p>
        <span
          onClick={this.openSelect}
          onKeyDown={this.openSelect}
          role="listbox"
          tabIndex="0"
        >
          {chosenSize || 'Select'}
        </span>
        <ul className={`size-picker__menu ${isOpen ? 'size-picker__menu--open' : ''}`}>
          {sizes.map(size => (
            <li
              tabIndex="0"
              role="option"
              aria-selected={this.chooseSize === size}
              onClick={this.chooseSize}
              onKeyDown={this.chooseSize}
              key={size}
              value={size}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SizePicker;
