import React from 'react';

export const createListItem = (isSelected, value, funcHandler) => (
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

export const calculatePrice = (price, salePerc) => +(price - price * (salePerc / 100)).toFixed(2);
