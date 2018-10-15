import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductPropTypes from '../../PropTypes/propTypes';

class ProductCard extends Component {
  static propTypes = {
    product: ProductPropTypes.isRequired,
    chooseProduct: PropTypes.func.isRequired,
  }

  handleClick = () => {
    const { product, chooseProduct } = this.props;
    chooseProduct(product);
  }

  render() {
    const { product } = this.props;
    const {
      _id, name, colors, description, image, type,
      onSale, price, rating, reviews, sizes,
    } = product;

    return (
      <div>
        <div>
          <img
            style={{
              height: 200,
            }}
            src={require(`../../assets/images/${image}`)}
            alt={type}
          />
          <Link to={`/store/product/${_id}`} onClick={this.handleClick}>{name}</Link>
          <p>{description}</p>
          {onSale > 0
            && <p>{`${onSale}% off`}</p>
          }
          <span>{onSale > 0 ? (price - price * (onSale / 100)).toFixed(2) : price}</span>
        </div>
        <div>
          <select>
            {colors.map(({ color }) => (
              <option key={color} value={color}>{color}</option>))
            }
          </select>
          {
            sizes.length > 0
          && (
          <select>
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>))
            }
          </select>
          )
          }
        </div>
        <h2>{`Rating: ${rating}`}</h2>
        <h3>{`Reviews: ${reviews}`}</h3>
      </div>
    );
  }
}

export default ProductCard;
