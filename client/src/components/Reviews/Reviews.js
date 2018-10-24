import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReviewPropTypes } from '../../PropTypes/propTypes';
import Review from '../Review/Review';

import './Reviews.sass';

class Reviews extends Component {
  static propTypes = {
    reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
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
    const { reviews } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <div
          className="reviews__toggler"
          onClick={this.toggleReviews}
          onKeyPress={this.toggleReviews}
          role="link"
          tabIndex="0"
        >
          <h3 className="reviews__checkout">Check out the Reviews</h3>
        </div>
        <div
          className={`reviews__container ${isOpen && 'reviews__container--open'}`}
          onClick={this.toggleReviews}
          onKeyPress={this.toggleReviews}
          role="link"
          tabIndex="0"
        >
          <div className="reviews__wrapper" role="presentation" onClick={this.stopPropagation}>
            {reviews.length === 0 && <h3>No reviews yet</h3>}
            {reviews.length > 0
              && (
                <>
                  <h1 className="reviews__header">Reviews</h1>
                  <ul className="reviews__list">
                    {reviews.map(review => <Review key={review.timestamp} review={review} />)}
                  </ul>
                </>
              )
            }
          </div>
        </div>
      </>
    );
  }
}

export default Reviews;
