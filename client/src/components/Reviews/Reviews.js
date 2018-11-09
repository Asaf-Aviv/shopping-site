import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ReviewPropTypes } from '../../PropTypes';
import ReviewForm from '../ReviewForm';
import Review from '../Review';

import './Reviews.sass';

class Reviews extends PureComponent {
  static propTypes = {
    reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
    productId: PropTypes.string.isRequired,
  }

  state = {
    isOpen: false,
  }

  toggleReviews = (e) => {
    if (e.key === 'Enter' || !e.key) {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
    }
  }

  stopPropagation = e => e.stopPropagation();

  render() {
    const { reviews, productId } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <button
          type="button"
          className="btn btn--secondary"
          onClick={this.toggleReviews}
          onKeyPress={this.toggleReviews}
        >
          Reviews
        </button>
        <div
          className={`reviews__container ${isOpen && 'reviews__container--open'}`}
          onClick={this.toggleReviews}
          onKeyPress={this.toggleReviews}
          role="link"
          tabIndex="0"
        >
          <div className="reviews__wrapper" role="presentation" onClick={this.stopPropagation}>
            <ReviewForm productId={productId} />
            <h1 className="reviews__header">Reviews</h1>
            {reviews.length === 0 && <h3>No reviews yet</h3>}
            {reviews.length > 0
              && (
                <ul className="reviews__list">
                  {reviews.map(review => (
                    <Review key={review.name + review.timestamp} review={review} />
                  ))}
                </ul>
              )
            }
          </div>
        </div>
      </>
    );
  }
}

export default Reviews;
