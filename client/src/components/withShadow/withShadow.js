import React from 'react';

import './withShadow.sass';

const withShadow = WrappedComponent => props => (
  <div className="shadow">
    <WrappedComponent {...props} />
  </div>
);

export default withShadow;
