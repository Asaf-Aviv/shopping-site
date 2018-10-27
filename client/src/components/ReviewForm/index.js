import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { modifyProduct } from '../../actions/productActions';

export default connect(null, { modifyProduct })(ReviewForm);
