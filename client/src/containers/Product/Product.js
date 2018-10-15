import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductPropTypes from '../../PropTypes/propTypes';
import { fetchProduct } from '../../actions/productActions';

const mapStateToProps = state => ({
  product: state.store.chosenProduct.data,
  isFetching: state.store.chosenProduct.isFetching,
  error: state.store.chosenProduct.error,
});

@connect(mapStateToProps)
class Product extends Component {
  static propTypes = {
    product: PropTypes.oneOfType([ProductPropTypes, PropTypes.object]).isRequired,
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
              <img
                style={{
                  height: 200,
                }}
                src={require(`../../assets/images/${product.image}`)}
                alt={product.type}
              />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              {product.onSale > 0
                && <p>{`${product.onSale}% off`}</p>
            }
              <span>
                {product.onSale > 0
                  ? (product.price - product.price * (product.onSale / 100)).toFixed(2)
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
