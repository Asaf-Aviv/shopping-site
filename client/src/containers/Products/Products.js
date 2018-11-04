import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard';
import LoadingIndicator from '../../components/LoadingIndicator';
import { ProductPropTypes } from '../../PropTypes';

import './Products.sass';


class Products extends Component {
  static propTypes = {
    products: PropTypes.shape({
      productsList: PropTypes.arrayOf(ProductPropTypes).isRequired,
      isFetching: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
      isLastPage: PropTypes.bool.isRequired,
    }).isRequired,
    fetchProducts: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    const { fetchProducts } = this.props;

    const infiniteScrollObserver = this.createInfiniteScroll(fetchProducts);
    const loadingTrigger = document.querySelector('.loading-trigger');
    infiniteScrollObserver.observe(loadingTrigger);
    window.infiniteScrollObserver = infiniteScrollObserver;
  };

  componentWillUnmount = () => {
    const loadingTrigger = document.querySelector('.loading-trigger');
    window.infiniteScrollObserver.unobserve(loadingTrigger);
  }

  createInfiniteScroll = fn => (
    new IntersectionObserver((entries) => {
      const { products: { isFetching, isLastPage } } = this.props;

      if (isLastPage) return;
      if (entries[0].intersectionRatio > 0 && !isFetching) {
        fn();
      }
    })
  );

  render() {
    const {
      products: {
        productsList, isFetching, error, isLastPage,
      },
    } = this.props;

    return (
      <div className="products__list-container">
        <ul className="products__list">
          {isFetching && <h3>Fetching...</h3>}
          {error && <h3>Products not found</h3>}
          {productsList.map(product => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </ul>
        <div className="loading-trigger">
          {isFetching && <LoadingIndicator />}
          {isLastPage && <h1>No more products</h1>}
        </div>
      </div>
    );
  }
}

export default Products;
