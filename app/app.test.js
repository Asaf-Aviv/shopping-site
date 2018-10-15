require('dotenv').config();
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('./app');
const Product = require('../models/Product');
const mongoDBConfig = require('../db/db.config.js');

const { fakeProduct1, fakeReview } = require('../data/fakeProducts');

mongoose.connect(process.env.TEST_MONGO_URI, mongoDBConfig);

describe('App test', () => {
  let server;

  beforeAll(() => {
    server = app.listen(5001);
  });

  beforeEach(async () => {
    await Product.remove();
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  it('Should be a module', () => {
    expect(app).toBeDefined();
  });

  describe('Product routes', () => {
    describe('GET routes', () => {
      it('Should return all products', async () => {
        await request(server)
          .get('/api/store/products')
          .expect(200);
      });

      it('Should return a product by id', async () => {
        const { _id: productId } = await Product.addProduct(fakeProduct1);

        await request(server)
          .get(`/api/store/product/${productId}`)
          .expect(200);
      });

      it('Should fail when product dose not exist', async () => {
        await request(server)
          .get('/api/store/product/5bbe1ccf16be7b3cc40cb50c')
          .expect(404);
      });
    });

    describe('POST routes', () => {
      it('Should create a product', async () => {
        await request(server)
          .post('/api/store/product')
          .send({
            product: fakeProduct1,
          })
          .expect(200);
      });

      it('Should update quantity of a product', async () => {
        const product = await Product.addProduct(fakeProduct1);

        await request(server)
          .post('/api/store/product/quantity')
          .send({
            productId: product._id,
            color: product.colors[0].color,
            quantity: 4,
          })
          .expect(200);
      });

      it('Should add a review', async () => {
        const product = await Product.addProduct(fakeProduct1);

        await request(server)
          .post('/api/store/product/reviews')
          .send({
            productId: product._id,
            review: fakeReview,
          })
          .expect(200);
      });
    });

    describe('DELETE routes', () => {
      it('Should delete a review', async () => {
        const product = await Product.addProduct(fakeProduct1);
        await Product.addReview(product._id, fakeReview);

        const productWithReview = await Product.findById(product._id);

        await request(server)
          .delete('/api/store/product/reviews')
          .send({
            reviewId: productWithReview.reviews[0]._id,
          })
          .expect(200);
      });

      it('Should return 404 for non existed review', async () => {
        await request(server)
          .delete('/api/store/product/reviews')
          .send({
            reviewId: '5bbe1ccf16be7b3cc40cb50c',
          })
          .expect(404);
      });
    });
  });

  describe('404', () => {
    it('Should return 404', async () => {
      await request(server)
        .get('/not_exists')
        .expect(404);
    });
  });
});
