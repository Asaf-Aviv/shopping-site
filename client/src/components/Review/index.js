import { connect } from 'react-redux';
import Review from './Review';
import { deleteReview } from '../../actions/reviewActions';


export default connect(null, { deleteReview })(Review);
