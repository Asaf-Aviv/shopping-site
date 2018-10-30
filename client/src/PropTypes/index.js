import {
  string, number, shape, arrayOf,
} from 'prop-types';

export const ProductPropTypes = shape({
  _id: string.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  gender: string.isRequired,
  image: string.isRequired,
  type: string.isRequired,
  discount: number.isRequired,
  price: number.isRequired,
  rating: number.isRequired,
  colors: arrayOf(shape({
    color: string.isRequired,
    quantity: number.isRequired,
  })).isRequired,
  reviews: arrayOf(shape({
    name: string.isRequired,
    body: string.isRequired,
    rating: number.isRequired,
  })).isRequired,
  sizes: arrayOf(number).isRequired,
});

export const CartItemPropTypes = shape({
  product: ProductPropTypes.isRequired,
  color: string.isRequired,
  size: number.isRequired,
  quantity: number.isRequired,
});

export const ReviewPropTypes = shape({
  name: string.isRequired,
  body: string.isRequired,
  timestamp: number.isRequired,
  rating: number.isRequired,
});

export const ColorPropTypes = shape({
  color: string,
  quantity: number,
});

export const OrderItemPropTypes = shape({
  product: ProductPropTypes.isRequired,
  color: string.isRequired,
  size: number.isRequired,
  quantity: number.isRequired,
});

export const OrderPropTypes = shape({
  _id: string.isRequired,
  orderId: string.isRequired,
  timestamp: number.isRequired,
  totalPrice: number.isRequired,
  items: arrayOf(OrderItemPropTypes),
});
