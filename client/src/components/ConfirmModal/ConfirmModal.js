import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './ConfirmModal.sass';

class ConfirmModal extends Component {
  static propTypes = {
    successHandler: PropTypes.func.isRequired,
    declineHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    danger: PropTypes.bool,
  }

  static defaultProps = {
    danger: false,
  }

  onSuccess = () => {
    const { successHandler } = this.props;
    successHandler();
  }

  onDecline = () => {
    const { declineHandler } = this.props;
    declineHandler();
  }

  render() {
    const { danger, text } = this.props;

    return createPortal(
      <div className={`modal ${danger ? 'modal--danger' : ''}`} onClick={this.onDecline} role="presentation">
        <div className="modal__info" onClick={e => e.stopPropagation()} role="presentation">
          <h4 className="modal__title">{text}</h4>
          <div className="modal__btn-group">
            <button
              type="button"
              className="btn btn--default"
              onClick={this.onDecline}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`btn ${danger ? 'btn--danger' : 'btn--primary'}`}
              onClick={this.onSuccess}
            >
              Ok
            </button>
          </div>
        </div>
      </div>,
      document.getElementById('modal-root'),
    );
  }
}

export default ConfirmModal;
