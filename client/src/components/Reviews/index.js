import { connect } from 'react-redux';
import { memo } from 'react';
import Reviews from './Reviews';

const mapStateToProps = state => ({
  processing: state.reviews.deleting.processing,
});

export default memo(connect(mapStateToProps)(Reviews));
