import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import Products from '../../containers/Products';
import StickyCart from '../../containers/StickyCart';
import FilterSideBar from '../../containers/FilterSideBar';
import ErrorBoundary from '../ErrorBoundary';

import './Store.sass';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: null,
    };

    this.handleResize = throttle(this.handleResize.bind(this), 300);
  }

  setWidth = () => this.setState({ width: window.innerWidth });

  handleResize = () => {
    this.setWidth();
  };

  componentDidMount = () => {
    this.setWidth();
    window.addEventListener('resize', this.handleResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  };

  render() {
    const { width } = this.state;

    return (
      <main className="store">
        <ErrorBoundary>
          <FilterSideBar />
        </ErrorBoundary>
        <ErrorBoundary>
          <Products />
        </ErrorBoundary>
        {width >= 1050 ? (
          <ErrorBoundary>
            <StickyCart />
          </ErrorBoundary>
        ) : null}
      </main>
    );
  }
}
export default Store;
