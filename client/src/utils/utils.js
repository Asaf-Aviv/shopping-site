import React from 'react';

export const createListItem = (isSelected, value, funcHandler, classes) => (
  <li
    className={classes}
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

export const loadStateFromStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveStateToStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error);
  }
};
