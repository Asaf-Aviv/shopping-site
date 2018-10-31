import React from 'react';
import PropTypes from 'prop-types';

const List = ({ children, classes }) => (
  <ul className={classes}>
    {children}
  </ul>
);

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  classes: PropTypes.string,
};

List.defaultProps = {
  classes: '',
};

export default List;
