import React from 'react';
import Products from '../../containers/Products';
import StickyCart from '../../containers/StickyCart';

import './Store.sass';

const Store = () => (
  <main className="store">
    <Products />
    <StickyCart />
  </main>
);

export default Store;
