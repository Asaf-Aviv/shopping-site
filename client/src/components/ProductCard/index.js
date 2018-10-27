import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import { addToCartHandler } from '../../actions/cartActions';
import { chooseProduct } from '../../actions/productActions';

export default connect(null, { chooseProduct, addToCartHandler })(ProductCard);
