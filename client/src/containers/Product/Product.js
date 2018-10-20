import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductImage from '../../components/ProductImage/ProductImage';
import { ProductPropTypes } from '../../PropTypes/propTypes';
import { fetchProduct } from '../../actions/productActions';

const mapStateToProps = state => ({
  product: state.store.chosenProduct.data,
  isFetching: state.store.chosenProduct.isFetching,
  error: state.store.chosenProduct.error,
});

@connect(mapStateToProps)
class Product extends Component {
  static propTypes = {
    product: ProductPropTypes.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        productId: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }

  componentDidMount = async () => {
    const { product, dispatch } = this.props;

    if (!Object.keys(product).length) {
      const { match: { params: { productId } } } = this.props;
      dispatch(fetchProduct(productId));
    }
  }

  render() {
    const { product, isFetching, error } = this.props;

    return (
      <>
        { isFetching && <h3>Fetching...</h3> }
        { error && <h3>Product not found</h3> }
        { Object.keys(product).length > 0 && (
          <div>
            <div>
              <ProductImage imgName={product.image} alt={product.type} />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              {product.discount > 0
                && <p>{`${product.discount}% off`}</p>
            }
              <span>
                {product.discount > 0
                  ? (product.price - product.price * (product.discount / 100)).toFixed(2)
                  : product.price}
              </span>
            </div>
            <div>
              <select>
                { product.colors.map(({ color }) => (
                  <option key={color} value={color}>{color}</option>))
              }
              </select>
              {
              product.sizes.length > 0
            && (
            <select>
              { product.sizes.map(size => (
                <option key={size} value={size}>{size}</option>))
              }
            </select>
            )
            }
            </div>
            <h2>{`Rating: ${product.rating}`}</h2>
            <h3>{`Reviews: ${product.reviews}`}</h3>
          </div>
        )
        }
      </>
    );
  }
}

export default Product;