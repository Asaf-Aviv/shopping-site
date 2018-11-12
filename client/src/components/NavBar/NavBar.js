import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import IconButton from '../IconButton';
import MenuIcon from '../../assets/svgs/menu.svg';

import './NavBar.sass';

class NavBar extends Component {
  static propTypes = {
    numOfCartItems: PropTypes.number.isRequired,
    numOfOrders: PropTypes.number.isRequired,
  }

  state = {
    isOpen: false,
  }

  toggleNav = () => {
    const body = document.querySelector('body');

    return () => {
      this.setState((prevState) => {
        body.style.overflowY = prevState.isOpen ? 'visible' : 'hidden';
        return { isOpen: !prevState.isOpen };
      });
    };
  }

  shouldCollapse = (e) => {
    if (e.target.classList.contains('nav__link')) {
      this.toggleNav()();
    }
  }

  render() {
    const { numOfCartItems, numOfOrders } = this.props;
    const { isOpen } = this.state;

    return (
      <nav className="nav">
        <IconButton onClick={this.toggleNav()} classes="nav__toggler">
          <MenuIcon />
        </IconButton>
        <div className={`nav__responsive ${isOpen ? 'nav__responsive--open' : ''}`}>
          <ul className="nav__menu" onClick={this.shouldCollapse} role="presentation">
            <h1 className="nav__brand">Shopply</h1>
            <li className="nav__item">
              <NavLink
                to="/store"
                className="nav__link"
                activeClassName="nav__link--active"
              >
                Store
              </NavLink>
            </li>
            <SearchBar />
            <li className="nav__item">
              <NavLink
                to="/cart"
                className="nav__link"
                activeClassName="nav__link--active"
              >
                Cart
                {numOfCartItems > 0 && <span className="nav__badge">{numOfCartItems}</span>}
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/orders"
                className="nav__link"
                activeClassName="nav__link--active"
              >
                Orders
                {numOfOrders > 0 && <span className="nav__badge">{numOfOrders}</span>}
              </NavLink>
            </li>
          </ul>
          <div className="nav__transparent" onClick={this.toggleNav()} /> {/* eslint-disable-line */}
        </div>
        <SearchBar />
      </nav>
    );
  }
}

export default NavBar;
