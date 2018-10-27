const express = require('express');

const app = express();
const storeAPI = require('../api/routes/store');
const ordersAPI = require('../api/routes/orders');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/store', storeAPI, ordersAPI);

// const Product = require('../models/Product');
// const products = require('../data/products');

// Product.remove()
//   .then(() => {
//     products.map(product => Product.addProduct(product));
//   });

module.exports = app;
