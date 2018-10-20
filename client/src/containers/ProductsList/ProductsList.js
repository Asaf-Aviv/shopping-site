import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductPropTypes } from '../../PropTypes/propTypes';
import { fetchProducts, chooseProduct } from '../../actions/productActions';

const mapStateToProps = state => ({
  products: state.store.products,
});

@connect(mapStateToProps)
class Products extends Component {
  static propTypes = {
    products: PropTypes.shape({
      productsList: PropTypes.arrayOf(ProductPropTypes).isRequired,
      isFetching: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  };

  chooseProductHandler = (product) => {
    const { dispatch } = this.props;
    dispatch(chooseProduct(product));
  };

  render() {
    const {
      dispatch,
      products: { productsList, isFetching, error },
    } = this.props;

    return (
      <ul>
        {isFetching && <h3>Fetching...</h3>}
        {error && <h3>Products not found</h3>}
        {productsList.map(product => (
          <li key={product._id}>
            <ProductCard
              dispatch={dispatch}
              product={product}
              chooseProduct={this.chooseProductHandler}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default Products;
