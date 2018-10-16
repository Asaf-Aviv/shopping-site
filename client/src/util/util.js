import React from 'react';

export default (isSelected, value, funcHandler) => (
  <li
    tabIndex="0"
    role="option"
    aria-selected={isSelected}
    key={value}
    value={value}
    onClick={funcHandler}
    onKeyDown={funcHandler}
  >
    {value}
  </li>
);
