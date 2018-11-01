import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from '../ProductImage';
import { ProductPropTypes } from '../../PropTypes';

const SearchBarItem = ({ product }) => (
  <li className="search-bar__item">
    <Link
      to={`/store/product/${product._id}`}
      className="search-bar__link"
    >
      <div className="search-bar__img">
        <ProductImage
          imgName={product.image}
          alt={product.name}
        />
      </div>
      <div className="search-bar__details">
        <h4 className="search-bar__name">{product.name}</h4>
        <p className="search-bar__description">{product.description}</p>
      </div>
      <h4 className="search-bar__price">{`${product.price}$`}</h4>
    </Link>
  </li>
);

SearchBarItem.propTypes = {
  product: ProductPropTypes.isRequired,
};

export default SearchBarItem;
