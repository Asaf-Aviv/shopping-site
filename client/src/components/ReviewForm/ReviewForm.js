import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';

import './ReviewForm.sass';

class ReviewForm extends Component {
  static propTypes = {
    productId: PropTypes.string.isRequired,
    sendReview: PropTypes.func.isRequired,
    processing: PropTypes.bool.isRequired,
  }

  state = {
    name: '',
    body: '',
    rating: 1,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, body, rating } = this.state;
    const { sendReview, productId } = this.props;

    const review = {
      name, body, rating,
    };

    sendReview(productId, review);
    this.setState({
      name: '',
      body: '',
      rating: 1,
    });
  }

  onChange = (key, inputValue) => {
    this.setState({ [key]: inputValue });
  }

  chooseRating = (e) => {
    this.setState({ rating: +e.target.innerHTML });
  }

  render() {
    const { name, body, rating } = this.state;
    const { processing } = this.props;

    return (
      <div className="add-review">
        {processing && <LoadingIndicator transparent />}
        <h3 className="add-review__title">Add a Review</h3>
        <form onSubmit={this.handleSubmit} className="add-review__form">
          <input
            className="add-review__input"
            type="text"
            onChange={e => this.onChange('name', e.target.value)}
            value={name}
            placeholder="Name"
            required
          />
          <textarea
            className="add-review__textarea"
            type="text"
            onChange={e => this.onChange('body', e.target.value)}
            value={body}
            placeholder="Review"
            rows="4"
            required
          />
          <div className="add-review__rating">
            {[...Array(5)].map((_, i) => (
              <button
                className={`add-review__btn ${rating === i + 1 ? 'add-review__btn--active' : ''}`}
                type="button"
                key={i} // eslint-disable-line
                onClick={this.chooseRating}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button className="add-review__submit" type="submit" disabled={processing}>Send</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
