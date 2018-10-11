exports.fakeProduct1 = {
  name: 'Hat - H1',
  image: 'hat.jpg',
  price: 9.99,
  onSale: 0,
  type: 'hat',
  description: 'Lorem adipisicing elit. Laudantium, sint.',
  colors: [
    { color: 'brown', quantity: '2' },
    { color: 'red', quantity: '4' },
  ],
};

exports.fakeProduct2 = {
  name: 'pants - P1',
  price: 24.99,
  onSale: 20,
  type: 'pants',
  image: 'pants.jpg',
  description: 'Lorem adipisicing elit. Laudantium, sint.',
  colors: [
    { color: 'blue', quantity: '5' },
  ],
};

exports.invalidProduct = {
  image: 'shirt.jpg',
  price: 9.99,
  onSale: 25,
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
