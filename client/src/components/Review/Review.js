import React from 'react';
import { distanceInWordsStrict } from 'date-fns';
import StarIcon from '../../assets/svgs/star.svg';
import { ReviewPropTypes } from '../../PropTypes/propTypes';

import './Review.sass';

const Review = ({ review }) => (
  <li>
    <div className="review">
      <div className="review__info">
        <h3 className="review__name">{review.name}</h3>
        <div className="review__rating">
          <StarIcon style={{ height: '100%', marginRight: 5 }} />
          <span>{review.rating}</span>
        </div>
        <span className="review__timestamp">
          {`${distanceInWordsStrict(review.timestamp, new Date(), { includeSeconds: true })} ago`}
        </span>
      </div>
      <p className="review__body">{review.body}</p>
    </div>
  </li>
);

Review.propTypes = {
  review: ReviewPropTypes.isRequired,
};

export default Review;
