import { connect } from 'react-redux';
import Cart from './Cart';
import { orderHandler } from '../../actions/orderActions';

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { orderHandler })(Cart);
