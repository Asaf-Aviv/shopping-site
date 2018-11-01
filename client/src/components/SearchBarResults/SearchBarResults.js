import React from 'react';
import PropTypes from 'prop-types';
import SearchBarItem from '../SearchBarItem';
import LoadingIndicator from '../LoadingIndicator';
import { ProductPropTypes } from '../../PropTypes';

const displayInfo = error => (
  <div className="search-bar__info">
    {error
      ? <h2>Something went wrong</h2>
      : <h2>No products found</h2>}
  </div>
);

const SearchBarResults = ({
  isFocused, productName, products, isFetching, error,
}) => (
  <div className={`search-bar__results ${isFocused && productName ? 'search-bar__results--open' : ''}`}>
    <ul className="search-bar__list">
      { isFetching && <LoadingIndicator size={80} transparent />}
      {products.length > 0
        && products.map(product => <SearchBarItem product={product} key={product._id} />)
      }
      {products.length === 0 && !isFetching && productName && displayInfo(error)}
    </ul>
  </div>
);

SearchBarResults.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  productName: PropTypes.string,
  products: PropTypes.arrayOf(ProductPropTypes).isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

SearchBarResults.defaultProps = {
  productName: null,
};

export default SearchBarResults;
