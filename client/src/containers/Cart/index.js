import { connect } from 'react-redux';
import Cart from './Cart';
import { orderHandler } from '../../actions/orderActions';
import { removeFromCartHandler } from '../../actions/cartActions';

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  orderHandler,
  removeFromCartHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
