import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { sendReview } from '../../actions/reviewActions';

const mapStateToProps = state => ({
  processing: state.reviews.form.processing,
});

export default connect(mapStateToProps, { sendReview })(ReviewForm);
