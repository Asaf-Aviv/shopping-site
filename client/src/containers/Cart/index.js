import { connect } from 'react-redux';
import Cart from './Cart';
import { orderHandler } from '../../actions/orderActions';
import { removeFromCartHandler } from '../../actions/cartActions';

const mapStateToProps = state => ({
  products: state.cart.products,
  totalPrice: state.cart.totalPrice,
});

const mapDispatchToProps = {
  orderHandler,
  removeFromCartHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
