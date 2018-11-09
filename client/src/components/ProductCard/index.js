import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import { addToCartHandler } from '../../actions/cartActions';
import { chooseProduct } from '../../actions/productActions';

const mapDispatchToProps = {
  chooseProduct,
  addToCartHandler,
};

export default connect(null, mapDispatchToProps)(ProductCard);
