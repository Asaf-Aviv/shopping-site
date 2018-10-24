import PropTypes from 'prop-types';

export const ProductPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
});

export const CartItemPropTypes = PropTypes.shape({
  product: ProductPropTypes.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
});

export const ReviewPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
});
