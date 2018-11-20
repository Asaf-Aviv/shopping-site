import React from 'react';
import PropTypes from 'prop-types';
import { ReviewPropTypes } from '../../PropTypes';
import ReviewForm from '../ReviewForm';
import Review from '../Review';
import LoadingIndicator from '../LoadingIndicator';

import './Reviews.sass';

const Reviews = ({
  reviews, productId, toggleReviews, processing,
}) => (
  <div
    className="reviews__container reviews__container--open scale-in-center"
    onClick={toggleReviews}
    onKeyPress={toggleReviews}
    role="link"
    tabIndex="0"
  >
    <div className="reviews__wrapper" role="presentation" onClick={e => e.stopPropagation()}>
      <ReviewForm productId={productId} />
      <h1 className="reviews__header">Reviews</h1>
      {reviews.length === 0 && <h3>No reviews yet</h3>}
      {reviews.length > 0
        && (
          <ul className="reviews__list">
            {processing && <LoadingIndicator />}
            {reviews.map(review => (
              <Review
                key={review.name + review.timestamp}
                review={review}
                productId={productId}
              />
            ))}
          </ul>
        )
      }
    </div>
  </div>
);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
  productId: PropTypes.string.isRequired,
  toggleReviews: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
};

export default Reviews;
