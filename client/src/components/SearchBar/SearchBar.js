import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import SearchBarResults from '../../containers/SearchBarResults';

import './SearchBar.sass';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      isFocused: false,
    };

    this.searchBar = React.createRef();
    this.fetchProducts = debounce(this.fetchProducts.bind(this), 300, { leading: true });
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.detectClick);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.detectClick);
  }

  onFocus = () => {
    this.setState({
      isFocused: true,
    });
  }

  detectClick = (e) => {
    if (this.searchBar.current.contains(e.target)) return;

    const { isFocused } = this.state;
    if (isFocused) this.setState({ isFocused: false });
  }

  onProductNameChange = (e) => {
    this.setState(
      { productName: e.target.value },
      () => {
        const { productName } = this.state;
        const { resetSearchBar } = this.props;

        if (productName) {
          this.fetchProducts(productName);
          return;
        }
        resetSearchBar();
      },
    );
  }

  fetchProducts = (productName) => {
    const { fetchProductsByName } = this.props;
    fetchProductsByName(productName);
  }

  render() {
    const { productName, isFocused } = this.state;

    return (
      <div className="search-bar">
        <div className="search-bar__input-wrapper" ref={this.searchBar}>
          <input
            className="search-bar__input"
            type="text"
            onChange={this.onProductNameChange}
            onFocus={this.onFocus}
            value={productName}
            placeholder="Search..."
          />
          <SearchBarResults
            isFocused={isFocused}
            productName={productName}
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  fetchProductsByName: PropTypes.func.isRequired,
  resetSearchBar: PropTypes.func.isRequired,
};

export default SearchBar;
