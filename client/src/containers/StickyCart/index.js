import { connect } from 'react-redux';
import StickyCart from './StickyCart';
import { removeFromCartHandler } from '../../actions/cartActions';

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { removeFromCartHandler })(StickyCart);
