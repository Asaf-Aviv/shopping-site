import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavBar from './NavBar';

const mapStateToProps = state => ({
  numOfCartItems: state.cart.products.length,
  numOfOrders: state.orders.length,
});

export default withRouter(connect(mapStateToProps)(NavBar));
