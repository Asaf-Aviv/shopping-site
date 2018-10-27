import { connect } from 'react-redux';
import CartItem from './CartItem';
import { removeFromCartHandler } from '../../actions/cartActions';

export default connect(null, { removeFromCartHandler })(CartItem);
