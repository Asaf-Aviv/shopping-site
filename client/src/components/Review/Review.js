import React from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import StarIcon from '../../assets/svgs/star.svg';
import { ReviewPropTypes } from '../../PropTypes';

import './Review.sass';

const Review = ({ review }) => (
  <li className="review">
    <div className="review__info">
      <h3 className="review__name">{review.name}</h3>
      <div className="review__rating">
        <StarIcon style={{ height: '100%', marginRight: 5 }} />
        <span>{review.rating}</span>
      </div>
      <span className="review__timestamp">
        {distanceInWordsToNow(review.timestamp)}
      </span>
    </div>
    <p className="review__body">{review.body}</p>
  </li>
);

Review.propTypes = {
  review: ReviewPropTypes.isRequired,
};

export default Review;
