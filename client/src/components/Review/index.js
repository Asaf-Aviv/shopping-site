import { connect } from 'react-redux';
import Review from './Review';
import { deleteReview } from '../../actions/reviewActions';

const mapStateToProps = state => ({
  processing: state.reviews.deleting.processing,
});

export default connect(mapStateToProps, { deleteReview })(Review);
