import React from 'react';
import PropTypes from 'prop-types';

const List = ({ children }) => (
  <ul>
    {children}
  </ul>
);

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default List;
