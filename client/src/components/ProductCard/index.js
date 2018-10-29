import { memo } from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import { addToCartHandler } from '../../actions/cartActions';
import { chooseProduct } from '../../actions/productActions';

export default memo(connect(null, { chooseProduct, addToCartHandler })(ProductCard));
