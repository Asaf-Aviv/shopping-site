require('dotenv').config();
const mongoose = require('mongoose');
const mongoDBConfig = require('../db/db.config.js');
const Product = require('../models/Product');
const {
  fakeProduct1,
  fakeProduct2,
  invalidProduct1,
  invalidProduct2,
} = require('./fakeProducts');

mongoose.connect(process.env.TEST_MONGO_URI, mongoDBConfig);

beforeAll(async () => {
  await Product.remove({});
});

beforeEach(async () => {
  await Product.remove({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Product model test', () => {
  it('Should have a model', () => {
    expect(Product).toBeDefined();
  });

  it('Should create a product', async () => {
    const product1 = await Product.addProduct(fakeProduct1);
    const product2 = await Product.addProduct(fakeProduct2);

    expect(product1.isNew).toStrictEqual(false);
    expect(product2.isNew).toStrictEqual(false);
  });

  it('Should return all products', async () => {
    await Product.addProduct(fakeProduct1);
    await Product.addProduct(fakeProduct2);

    const products = await Product.findAll();
    expect(products.length).toStrictEqual(2);
  });

  it('Should update product quantity', async () => {
    const product1 = await Product.addProduct(fakeProduct1);
    const product2 = await Product.addProduct(fakeProduct2);

    await Product.updateQuantity(product1._id, 'brown', 7);
    await Product.updateQuantity(product1._id, 'brown', -2);
    await Product.updateQuantity(product2._id, 'blue', 5);
    await Product.updateQuantity(product2._id, 'blue', -3);

    const [updatedProduct1, updatedProduct2] = await Promise.all([
      Product.findById(product1._id),
      Product.findById(product2._id),
    ]);

    expect(updatedProduct1.colors[0].quantity).toStrictEqual(7);
    expect(updatedProduct2.colors[0].quantity).toStrictEqual(7);
  });

  it('Should throw when product name already exists', async () => {
    await Product.addProduct(fakeProduct1);
    await Product.addProduct(fakeProduct2);

    await expect(Product.addProduct(fakeProduct1))
      .rejects
      .toThrow('E11000');

    await expect(Product.addProduct(fakeProduct2))
      .rejects
      .toThrow('E11000');
  });

  it('Should throw when providing an invalid schema', async () => {
    await expect(Product.addProduct(invalidProduct1))
      .rejects
      .toThrow('products validation failed');

    await expect(Product.addProduct(invalidProduct2))
      .rejects
      .toThrow('products validation failed');
  });

  describe('Reviews', () => {
    it('Should add a review', async () => {
      const product = await Product.addProduct(fakeProduct1);

      await Product.addReview(product._id,
        { name: 'Jelly Roger', rating: 4, body: 'Amazing product!!!' });

      await Product.addReview(product._id,
        { name: 'Rick Grimez', rating: 4, body: 'Top quality' });

      const updatedProduct = await Product.findById(product._id);
      expect(updatedProduct.reviews.length).toStrictEqual(2);
    });

    it('Should throw when providing an invalid schema', async () => {
      const product = await Product.addProduct(fakeProduct1);
      await expect(Product.addReview(product._id,
        { name: 'Rick Grimez', rating: 4 }))
        .rejects
        .toThrowError();

      await expect(Product.addReview(product._id,
        { name: 'Rick Grimez', body: 'Amazing' }))
        .rejects
        .toThrowError();

      await expect(Product.addReview(product._id,
        { rating: 4, body: 'Amazing' }))
        .rejects
        .toThrowError();
    });
  });
});
