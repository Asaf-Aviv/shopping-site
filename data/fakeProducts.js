exports.fakeProduct1 = {
  name: 'Hat - H1',
  image: 'hat.jpg',
  price: 9.99,
  gender: 'male',
  discount: 0,
  type: 'Hat',
  description: 'Lorem adipisicing elit. Laudantium, sint.',
  colors: [
    { color: 'brown', quantity: '2' },
    { color: 'red', quantity: '4' },
  ],
};

exports.fakeProduct2 = {
  name: 'pants - P1',
  price: 24.99,
  discount: 20,
  type: 'pants',
  gender: 'female',
  image: 'pants.jpg',
  description: 'Lorem adipisicing elit. Laudantium, sint.',
  colors: [
    { color: 'blue', quantity: '5' },
  ],
};

exports.invalidProduct = {
  image: 'shirt.jpg',
  price: 9.99,
  discount: 25,
  type: 'shirt',
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
