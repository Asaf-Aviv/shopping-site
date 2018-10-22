import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ProductPropTypes } from '../../PropTypes/propTypes';
import SizePicker from '../SizePicker/SizePicker';
import ColorPicker from '../ColorPicker/ColorPicker';
import QuantityPicker from '../QuantityPicker/QuantityPicker';
import Reviews from '../Reviews/Reviews';
import ProductImage from '../ProductImage/ProductImage';
import { calculatePrice } from '../../utils/utils';
import * as cartActions from '../../actions/cartActions';
import * as productActions from '../../actions/productActions';
import StarIcon from '../../assets/svgs/star.svg';

import './ProductCard.sass';

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
    showingReviews: false,
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
    const {
      chosenSize, chosenColor, chosenQuantity, showingReviews,
    } = this.state;
    const { product } = this.props;
    const {
      _id, name, colors, description, image, type,
      discount, price, rating, reviews, sizes,
    } = product;

    return (
      <li className="product">
        <div>
          <Link
            to={`/store/product/${_id}`}
            className="product__link"
            onClick={this.chooseProductHandler}
          >
            {name}
          </Link>
          <ProductImage imgName={image} alt={type} />
          <p className="product__description">{description}</p>
          <span className="product__price">{`${calculatePrice(price, discount)}$`}</span>
          {discount > 0 && <span className="product__discount">{`${discount}% off`}</span>}
        </div>
        <div className="pickers">
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
        </div>
        <QuantityPicker
          maxQuantity={chosenColor.quantity || 0}
          chosenQuantity={chosenQuantity}
          chooseQuantityHandler={this.chooseQuantityHandler}
        />
        <div className="rating__container">
          <StarIcon style={{ height: '100%', marginRight: 5 }} />
          <span className="rating">{rating}</span>
        </div>
        <Reviews reviews={reviews} isOpen={showingReviews}>See Reviews</Reviews>
        <button
          type="button"
          className="add-to-cart"
          disabled={!chosenColor.color || (product.sizes.length && !chosenSize)}
          onClick={this.addToCart}
        >
          Add to cart
        </button>
      </li>
    );
  }
}

export default ProductCard;
