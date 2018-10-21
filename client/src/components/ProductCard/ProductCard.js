import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ProductPropTypes } from '../../PropTypes/propTypes';
import SizePicker from '../SizePicker/SizePicker';
import ColorPicker from '../ColorPicker/ColorPicker';
import QuantityPicker from '../QuantityPicker/QuantityPicker';
import ProductImage from '../ProductImage/ProductImage';
import { calculatePrice } from '../../utils/utils';
import * as cartActions from '../../actions/cartActions';
import * as productActions from '../../actions/productActions';

@connect(null, { ...cartActions, ...productActions })
class ProductCard extends Component {
  static propTypes = {
    product: ProductPropTypes.isRequired,
    chooseProduct: PropTypes.func.isRequired,
    addToCartHandler: PropTypes.func.isRequired,
  }

  state = {
    chosenSize: 0,
    chosenColor: {},
    chosenQuantity: 0,
  }

  chooseProductHandler = () => {
    const { chooseProduct, product } = this.props;
    chooseProduct(product);
  };

  chooseSizeHandler = (chosenSize) => {
    this.setState({ chosenSize });
  }

  chooseColorHandler = (chosenColor) => {
    this.setState({ chosenColor });
  }

  chooseQuantityHandler = (operator) => {
    this.setState(prevState => ({
      chosenQuantity: operator === '+'
        ? prevState.chosenQuantity + 1
        : prevState.chosenQuantity - 1,
    }));
  }

  addToCart = () => {
    const { product, addToCartHandler } = this.props;
    const { chosenColor, chosenSize, chosenQuantity } = this.state;

    addToCartHandler({
      product: {
        ...product,
        price: calculatePrice(product.price, product.discount),
      },
      color: chosenColor.color,
      size: chosenSize,
      quantity: chosenQuantity,
    });
  }

  render() {
    const { chosenSize, chosenColor, chosenQuantity } = this.state;
    const { product } = this.props;
    const {
      _id, name, colors, description, image, type,
      discount, price, rating, reviews, sizes,
    } = product;

    return (
      <div>
        <div>
          <Link to={`/store/product/${_id}`} onClick={this.chooseProductHandler}>{name}</Link>
          <ProductImage imgName={image} alt={type} />
          <p>{description}</p>
          {discount > 0 && <p>{`${discount}% off`}</p>}
          <span>{calculatePrice(price, discount)}</span>
        </div>
        <SizePicker
          sizes={sizes}
          chosenSize={chosenSize}
          chooseSizeHandler={this.chooseSizeHandler}
        />
        <ColorPicker
          colors={colors}
          chosenColor={chosenColor}
          chooseColorHandler={this.chooseColorHandler}
        />
        <QuantityPicker
          maxQuantity={chosenColor.quantity || 0}
          chosenQuantity={chosenQuantity}
          chooseQuantityHandler={this.chooseQuantityHandler}
        />
        <h2>{`Rating: ${rating}`}</h2>
        <h3>{`Reviews: ${reviews}`}</h3>
        <button
          type="button"
          disabled={!chosenColor.color || (product.sizes.length && !chosenSize)}
          onClick={this.addToCart}
        >
          Add to cart
        </button>
      </div>
    );
  }
}

export default ProductCard;
