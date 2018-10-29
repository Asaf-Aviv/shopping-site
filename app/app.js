const express = require('express');
const path = require('path');

const app = express();
const storeAPI = require('../api/routes/store');
const ordersAPI = require('../api/routes/orders');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static(path.join(__dirname, '../client/dist')));
app.use('/js', express.static(path.join(__dirname, '../client/dist')));
app.use('/static', express.static(path.join(__dirname, '../public')));

app.use('/api/store', storeAPI, ordersAPI);

app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/dist/index.html')));

// const products = require('../data/products');
// const Product = require('../models/Product');

// Product.remove()
//   .then(() => {
//     products.map(product => Product.addProduct(product));
//   });

module.exports = app;
