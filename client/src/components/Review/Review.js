import React from 'react';
import { ReviewPropTypes } from '../../PropTypes/propTypes';

const Review = ({ review }) => (
  <li>
    <h1>Review</h1>
  </li>
);

Review.propTypes = {
  review: ReviewPropTypes.isRequired,
};

export default Review;
