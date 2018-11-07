import React, { Component } from 'react';
import {
  string, number, bool, func, shape, oneOfType,
} from 'prop-types';
import CheckBox from '../../components/CheckBox';

import './FilterSideBar.sass';

class FilterSearchBar extends Component {
  onInputChange = (e) => {
    const { updateFiltersAndProducts } = this.props;
    const { name, dataset: { group } } = e.target;
    updateFiltersAndProducts(group, name);
  }

  render() {
    const { filters, resetFiltersAndFetchProducts } = this.props;

    return (
      <div className="filters">
        <button
          className="filters__reset"
          type="button"
          onClick={resetFiltersAndFetchProducts}
        >
          reset all
        </button>
        {Object.keys(filters)
          .map(group => (
            <div className="filters__group" key={group}>
              <h4 className="filters__title">{group}</h4>
              {Object.keys(filters[group])
                .map(filter => (
                  <CheckBox
                    key={filter}
                    name={filter}
                    group={group}
                    changeHandler={this.onInputChange}
                    checked={filters[group][filter]}
                  />
                ))}
            </div>
          ))}
      </div>
    );
  }
}

FilterSearchBar.propTypes = {
  updateFiltersAndProducts: func.isRequired,
  resetFiltersAndFetchProducts: func.isRequired,
  filters: shape({
    [string]: shape({
      [oneOfType([string, number])]: bool,
    }),
  }).isRequired,
};

export default FilterSearchBar;
