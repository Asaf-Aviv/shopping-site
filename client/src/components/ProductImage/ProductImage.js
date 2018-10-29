import React from 'react';
import PropTypes from 'prop-types';

import './ProductImage.sass';

const ProductImage = ({ imgName, alt }) => (
  <figure className="product__figure">
    <img
      className="product__img"
      src={`static/images/${imgName}`}
      alt={alt}
    />
  </figure>
);

ProductImage.propTypes = {
  imgName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductImage;
