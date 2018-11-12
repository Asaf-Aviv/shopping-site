import { connect } from 'react-redux';
import StickyCartHeader from './StickyCartHeader';

const mapStateToProps = state => ({
  totalPrice: +state.cart.totalPrice,
});

export default connect(mapStateToProps)(StickyCartHeader);
