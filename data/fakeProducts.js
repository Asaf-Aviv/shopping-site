exports.fakeProduct1 = {
  name: 'Hat - H1',
  image: 'hat.jpg',
  price: 9.99,
  gender: 'Male',
  discount: 0,
  type: 'Hat',
  description: 'Lorem adipisicing elit. Laudantium, sint.',
  colors: [
    { color: 'Brown', quantity: '2' },
    { color: 'Red', quantity: '4' },
  ],
};

exports.fakeProduct2 = {
  name: 'pants - P1',
  price: 24.99,
  discount: 20,
  type: 'Pants',
  gender: 'Female',
  image: 'pants.jpg',
  description: 'Lorem adipisicing elit. Laudantium, sint.',
  colors: [
    { color: 'Blue', quantity: '5' },
  ],
};

exports.invalidProduct = {
  image: 'shirt.jpg',
  price: 9.99,
  discount: 25,
  type: 'Shirt',
  description: 'Lorem adipisicing elit. Laudantium, sint.',
  colors: [
    { color: 'red', quantity: '2' },
  ],
};

exports.fakeReview = {
  name: 'Jelly Roger',
  rating: 4,
  body: 'Amazing product!!!',
};
