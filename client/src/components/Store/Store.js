import React from 'react';
import Products from '../../containers/Products';
import StickyCart from '../../containers/StickyCart';
import FilterSearchBar from '../FilterSideBar';

import './Store.sass';

const Store = () => (
  <main className="store">
    <FilterSearchBar />
    <Products />
    <StickyCart />
  </main>
);

export default Store;
