import { connect } from 'react-redux';
import StickyCart from './StickyCart';
import { removeFromCartHandler } from '../../actions/cartActions';

const mapStateToProps = state => ({
  products: state.cart.products,
});

export default connect(mapStateToProps, { removeFromCartHandler })(StickyCart);
