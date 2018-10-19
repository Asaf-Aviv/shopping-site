import React from 'react';
import PropTypes from 'prop-types';

const ProductImage = ({ imgName, alt }) => (
  <img
    style={{ height: 200 }}
    src={require(`../../assets/images/${imgName}`)}
    alt={alt}
  />
);

ProductImage.propTypes = {
  imgName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductImage;
