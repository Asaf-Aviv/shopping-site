import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavBar from './NavBar';
import { toggleFilterSidebBar } from '../../actions/filterActions';

const mapStateToProps = state => ({
  numOfCartItems: state.cart.products.length,
  numOfOrders: state.orders.length,
});

export default withRouter(connect(mapStateToProps, { toggleFilterSidebBar })(NavBar));
