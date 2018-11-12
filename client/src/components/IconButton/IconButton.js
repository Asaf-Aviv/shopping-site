import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({
  children, onClick, classes, width, height,
}) => (
  <button
    type="button"
    className={`icon-btn ${classes}`}
    onClick={onClick}
    style={{ width, height }}
  >
    {children}
  </button>
);

IconButton.propTypes = {
  classes: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

IconButton.defaultProps = {
  classes: null,
  height: 'auto',
  width: 'auto',
};

export default IconButton;
