import React, { Component } from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash.capitalize';

import './DropDown.sass';

class DropDown extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number, PropTypes.string,
    ])).isRequired,
    text: PropTypes.string.isRequired,
    chosen: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    chooseHandler: PropTypes.func.isRequired,
  }

  state = {
    isOpen: false,
  }

  dropdown = React.createRef();

  componentDidMount = () => {
    document.addEventListener('mousedown', this.detectClick);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.detectClick);
  }

  detectClick = (e) => {
    if (this.dropdown.current.contains(e.target)) return;

    const { isOpen } = this.state;
    if (isOpen) this.setState({ isOpen: false });
  }

  toggleSelect = (e) => {
    if (!e || e.keyCode === 13 || !e.keyCode) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
  }

  chooseItemAndClose = (e) => {
    const { chooseHandler } = this.props;
    chooseHandler(e);
    this.toggleSelect();
  }

  render() {
    const { isOpen } = this.state;
    const { items, chosen, text } = this.props;

    return (
      <div ref={this.dropdown} className="dropdown">
        <span
          className="dropdown__chosen"
          onClick={this.toggleSelect}
          onKeyDown={this.toggleSelect}
          role="listbox"
          tabIndex="0"
        >
          {capitalize(chosen || text)}
        </span>
        <ul className={`dropdown__menu ${isOpen ? 'dropdown__menu--open' : ''}`}>
          {items.map(item => (
            <li
              className="dropdown__item"
              tabIndex="0"
              role="option"
              aria-selected={chosen === item}
              key={item}
              value={item}
              onClick={this.chooseItemAndClose}
              onKeyDown={this.chooseItemAndClose}
            >
              {capitalize(item)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DropDown;
