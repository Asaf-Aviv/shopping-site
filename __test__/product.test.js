require('dotenv').config();
const mongoose = require('mongoose');
const mongoDBConfig = require('../db/db.config.js');

mongoose.connect(process.env.TEST_MONGO_URI, mongoDBConfig);

const Product = require('../models/Product');
const {
  fakeProduct1,
  fakeProduct2,
  invalidProduct,
  fakeReview,
} = require('./fake_products');


describe('Product model test', () => {
  beforeAll(async () => {
    await Product.remove();
  });

  beforeEach(async () => {
    await Product.remove();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('Should be a model', () => {
    expect(Product).toBeDefined();
  });

  it('Should create a product', async () => {
    const product = await Product.addProduct(fakeProduct1);
    expect(product.isNew).toStrictEqual(false);
  });

  it('Should return all products', async () => {
    await Product.addProduct(fakeProduct1);
    await Product.addProduct(fakeProduct2);

    const products = await Product.findAll();
    expect(products.length).toStrictEqual(2);
  });

  it('Should update product quantity', async () => {
    const product = await Product.addProduct(fakeProduct1);

    await Product.updateQuantity(product._id, 'brown', 7);

    const updatedProduct1 = await Product.findById(product._id);
    expect(updatedProduct1.colors[0].quantity).toStrictEqual(9);
  });

  it('Should throw when product name already exists', async () => {
    await Product.addProduct(fakeProduct1);

    await expect(Product.addProduct(fakeProduct1))
      .rejects
      .toThrow('E11000');
  });

  it('Should throw when providing an invalid schema', async () => {
    await expect(Product.addProduct(invalidProduct))
      .rejects
      .toThrow('products validation failed');
  });

  describe('Reviews', () => {
    it('Should add a review', async () => {
      const product = await Product.addProduct(fakeProduct1);

      await Product.addReview(product._id, fakeReview);

      const updatedProduct = await Product.findById(product._id);
      expect(updatedProduct.reviews.length).toStrictEqual(1);
    });

    it('Should throw when missing body field', async () => {
      const product = await Product.addProduct(fakeProduct1);
      await expect(Product.addReview(product._id,
        { name: 'Rick Grimez', rating: 4 }))
        .rejects
        .toThrowError();
    });

    it('Should throw when missing rating field', async () => {
      const product = await Product.addProduct(fakeProduct1);

      await expect(Product.addReview(product._id,
        { name: 'Rick Grimez', body: 'Amazing' }))
        .rejects
        .toThrowError();
    });

    it('Should throw when missing name field', async () => {
      const product = await Product.addProduct(fakeProduct1);

      await expect(Product.addReview(product._id,
        { rating: 4, body: 'Amazing' }))
        .rejects
        .toThrowError();
    });
  });
});
