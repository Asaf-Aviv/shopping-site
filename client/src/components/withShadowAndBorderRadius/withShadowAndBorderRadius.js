import React from 'react';

import './withShadowAndBorderRadius.sass';

const withShadowAndBorderRadius = WrappedComponent => props => (
  <div className="shadow border-radius">
    <WrappedComponent {...props} />
  </div>
);

export default withShadowAndBorderRadius;
