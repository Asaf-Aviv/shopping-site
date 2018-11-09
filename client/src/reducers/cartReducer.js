const shouldIncQuantity = (products, newProduct) => {
  const productIndex = products
    .findIndex(({ product, size, color }) => product._id === newProduct.product._id
      && size === newProduct.size
      && color === newProduct.color);

  if (productIndex !== -1) {
    const updatedProduct = {
      ...products[productIndex],
      quantity: products[productIndex].quantity + newProduct.quantity,
    };

    return [
      ...products.slice(0, productIndex),
      updatedProduct,
      ...products.slice(productIndex + 1),
    ];
  }

  return [...products, newProduct];
};

const initialState = {
  products: [],
  totalPrice: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: shouldIncQuantity(state.products, action.product),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: state.products.filter((_, i) => i !== action.productIndex),
      };
    case 'UPDATE_CART_TOTAL':
      return {
        ...state,
        totalPrice: state.products
          .reduce(
            (total, cartItem) => total + cartItem.product.price * cartItem.quantity, 0,
          ).toFixed(2),
      };
    case 'RESET_CART':
      return initialState;
    default:
      return state;
  }
};
