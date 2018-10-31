import { memo } from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import { addToCartHandler } from '../../actions/cartActions';
import { chooseProduct } from '../../actions/productActions';

const mapDispatchToProps = {
  chooseProduct,
  addToCartHandler,
};

export default memo(connect(null, mapDispatchToProps)(ProductCard));
