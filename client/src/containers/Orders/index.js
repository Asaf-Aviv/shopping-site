import { connect } from 'react-redux';
import Orders from './Orders';

const mapStateToProps = state => ({
  orders: state.orders,
});

export default connect(mapStateToProps)(Orders);
