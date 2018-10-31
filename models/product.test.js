require('dotenv').config();
const mongoose = require('mongoose');
const mongoDBConfig = require('../db/db.config');

mongoose.connect(
  process.env.TEST_MONGO_URI,
  mongoDBConfig,
);

const Product = require('./Product');
const {
  fakeProduct1, fakeProduct2, invalidProduct, fakeReview,
} = require('../data/fakeProducts');

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

  it('is a model', () => {
    expect(Product).toBeDefined();
  });

  it('create a product', async () => {
    const product = await Product.addProduct(fakeProduct1);
    expect(product.isNew).toStrictEqual(false);
  });

  it('return products by page', async () => {
    await Promise.all([Product.addProduct(fakeProduct1), Product.addProduct(fakeProduct2)]);

    const numOfProducts = (await Product.fetchProductsByPage()).length;
    expect(numOfProducts).toStrictEqual(2);
  });

  it('find products by regex', async () => {
    await Promise.all([Product.addProduct(fakeProduct1), Product.addProduct(fakeProduct2)]);

    const productRegex = new RegExp('at', 'i');
    const numOfProducts = (await Product.searchProducts(productRegex)).length;
    expect(numOfProducts).toStrictEqual(1);
  });

  it('updates the product quantity', async () => {
    const { _id: productId } = await Product.addProduct(fakeProduct1);

    await Product.updateQuantity(productId, 'Brown', 7);

    const updatedProduct = await Product.findById(productId);
    expect(updatedProduct.colors[0].quantity).toStrictEqual(9);
  });

  it('throw when product name already exists', async () => {
    await Product.addProduct(fakeProduct1);

    await expect(Product.addProduct(fakeProduct1)).rejects.toThrow('E11000');
  });

  it('throw when providing an invalid schema', async () => {
    await expect(Product.addProduct(invalidProduct)).rejects.toThrow('products validation failed');
  });

  describe('Reviews', () => {
    it('add a review', async () => {
      const { _id: productId } = await Product.addProduct(fakeProduct1);

      await Product.addReview(productId, fakeReview);

      const updatedProduct = await Product.findById(productId);
      expect(updatedProduct.reviews.length).toStrictEqual(1);
    });

    it('throw when missing body field', async () => {
      const { _id: productId } = await Product.addProduct(fakeProduct1);

      await expect(
        Product.addReview(productId, { name: 'Rick Grimez', rating: 4 }),
      ).rejects.toThrowError();
    });

    it('throw when missing rating field', async () => {
      const { _id: productId } = await Product.addProduct(fakeProduct1);

      await expect(
        Product.addReview(productId, { name: 'Rick Grimez', body: 'Amazing' }),
      ).rejects.toThrowError();
    });

    it('throw when missing name field', async () => {
      const { _id: productId } = await Product.addProduct(fakeProduct1);

      await expect(
        Product.addReview(productId, { rating: 4, body: 'Amazing' }),
      ).rejects.toThrowError();
    });
  });
});
