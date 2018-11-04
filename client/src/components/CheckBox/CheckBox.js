import React from 'react';
import capitalize from 'lodash.capitalize';
import PropTypes from 'prop-types';

import './CheckBox.sass';

const CheckBox = ({
  name, checked, group, changeHandler,
}) => {
  const classes = `label ${checked ? 'label--checked' : ''}`;

  return (
    <label htmlFor={name} className={classes}>
      <input
        name={name}
        id={name}
        data-group={group}
        className="checkbox"
        type="checkbox"
        onChange={changeHandler}
        checked={checked}
      />
      {capitalize(name)}
    </label>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  group: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default CheckBox;
