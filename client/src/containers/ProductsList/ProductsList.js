import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import { ProductPropTypes } from '../../PropTypes/propTypes';
import * as actions from '../../actions/productActions';

import './productsList.sass';

const mapStateToProps = state => ({
  products: state.store.products,
});

@connect(mapStateToProps, actions)
class Products extends Component {
  static propTypes = {
    products: PropTypes.shape({
      productsList: PropTypes.arrayOf(ProductPropTypes).isRequired,
      isFetching: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
    }).isRequired,
    fetchProducts: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    const { fetchProducts, products: { isFetching } } = this.props;

    const infiniteScrollObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0 && !isFetching) {
        fetchProducts();
      }
    });

    const loadingTrigger = document.querySelector('.loading-trigger');

    infiniteScrollObserver.observe(loadingTrigger);
    window.infiniteScrollObserver = infiniteScrollObserver;
  };

  componentWillUnmount = () => {
    const loadingTrigger = document.querySelector('.loading-trigger');
    window.infiniteScrollObserver.unobserve(loadingTrigger);
  }

  render() {
    const { products: { productsList, isFetching, error } } = this.props;

    return (
      <>
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
        </div>
      </>
    );
  }
}

export default Products;
