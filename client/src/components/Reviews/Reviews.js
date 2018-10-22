import React from 'react';
import PropTypes from 'prop-types';
import { ReviewPropTypes } from '../../PropTypes/propTypes';
import Review from '../Review/Review';

const Reviews = ({ reviews }) => (
  <>
    <h3>Reviews</h3>
    <ul>
      {reviews.map(review => <Review review={review} />)}
    </ul>
  </>
);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default Reviews;
