import React, { Component } from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import PropTypes from 'prop-types';
import StarIcon from '../../assets/svgs/star.svg';
import { ReviewPropTypes } from '../../PropTypes';
import ConfirmModal from '../ConfirmModal';

import './Review.sass';

class Review extends Component {
  static propTypes = {
    deleteReview: PropTypes.func.isRequired,
    review: ReviewPropTypes.isRequired,
    productId: PropTypes.string.isRequired,
  }

  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  }

  onSuccess = () => {
    const { deleteReview, productId, review: { _id: reviewId } } = this.props;
    deleteReview(productId, reviewId);
    this.toggleModal();
  }

  onDecline = () => {
    this.toggleModal();
  }

  render() {
    const { showModal } = this.state;
    const { review } = this.props;

    return (
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
        <button
          type="button"
          onClick={this.toggleModal}
          className="btn btn--danger review__delete"
        >
          Delete
        </button>
        {showModal
          && (
            <ConfirmModal
              text="Are you sure you want to delete this review ?"
              successHandler={this.onSuccess}
              declineHandler={this.onDecline}
              danger
            />
          )
        }
      </li>
    );
  }
}

export default Review;
