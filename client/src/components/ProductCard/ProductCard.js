import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductPropTypes from '../../PropTypes/propTypes';
import SizePicker from '../SizePicker/SizePicker';
import ColorPicker from '../ColorPicker/ColorPicker';

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
          <Link to={`/store/product/${_id}`} onClick={this.handleClick}>{name}</Link>
          <img
            style={{
              height: 200,
            }}
            src={require(`../../assets/images/${image}`)}
            alt={type}
          />
          <p>{description}</p>
          {onSale > 0
            && <p>{`${onSale}% off`}</p>
          }
          <span>{onSale > 0 ? (price - price * (onSale / 100)).toFixed(2) : price}</span>
        </div>
        <ColorPicker colors={colors} />
        <SizePicker sizes={sizes} />
        <h2>{`Rating: ${rating}`}</h2>
        <h3>{`Reviews: ${reviews}`}</h3>
      </div>
    );
  }
}

export default ProductCard;
