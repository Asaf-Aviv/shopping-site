import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../assets/svgs/spinner.svg';

import './LoadingIndicator.sass';

const LoadingIndicator = ({ size, transparent }) => {
  const classes = `loading-indicator ${transparent && 'loading-indicator__transparent'}`;

  return (
    <div className={classes}>
      <Spinner style={{ height: size }} />
    </div>
  );
};

LoadingIndicator.propTypes = {
  size: PropTypes.number,
  transparent: PropTypes.bool,
};

LoadingIndicator.defaultProps = {
  size: 100,
  transparent: false,
};

export default LoadingIndicator;
