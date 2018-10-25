import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import Loader from '../Loader/Loader';
import * as actions from '../../actions/productActions';

import './ReviewForm.sass';

class ReviewForm extends Component {
  static propTypes = {
    productId: PropTypes.string.isRequired,
    modifyProduct: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    body: '',
    rating: 0,
    sending: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, body, rating } = this.state;
    const { modifyProduct, productId } = this.props;

    const review = {
      name, body, rating,
    };

    axios.post('/api/store/product/reviews', { productId, review })
      .then(
        ({ data: updatedDoc }) => modifyProduct(updatedDoc),
        () => console.log('something went wrong'),
      );
  }

  onChange = (key, inputValue) => {
    this.setState({ [key]: inputValue });
  }

  chooseRating = (e) => {
    this.setState({ rating: +e.target.innerHTML });
  }

  render() {
    console.log(this.props);
    const { name, body, sending } = this.state;
    return (
      <div className="add-review">
        {sending && <Loader />}
        <h3 className="add-review__title">Add a Review</h3>
        <form onSubmit={this.handleSubmit} className="add-review__form">
          <input
            className="add-review__input"
            type="text"
            onChange={e => this.onChange('name', e.target.value)}
            value={name}
            placeholder="Name"
          />
          <textarea
            className="add-review__textarea"
            type="text"
            onChange={e => this.onChange('body', e.target.value)}
            value={body}
            placeholder="Review"
            rows="4"
          />
          {/* eslint-disable-next-line */}
          {[...Array(5)].map((_, i) => <button type="button" key={i} onClick={this.chooseRating}>{i + 1}</button>)}
          <button className="add-review__submit" type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(ReviewForm);
