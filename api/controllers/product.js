const Product = require('../../models/product');

exports.getAllProducts = (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(() => next());
};

exports.getProductById = (req, res, next) => {
  Product.findById(req.params.productId)
    .then(product => res.send(product))
    .catch(() => next());
};

exports.addProduct = (req, res, next) => {
  Product.addProduct(req.body)
    .then(result => res.send(result))
    .catch(() => next());
};

exports.addProductQuantity = (req, res, next) => {
  const { productId, color, quantityToAdd } = req.body;
  Product.addQuantity(productId, color, quantityToAdd)
    .then(result => (result.nModified === 1 ? res.send() : next()))
    .catch(() => next());
};

exports.addReview = (req, res, next) => {
  const { _id, review } = req.body;
  Product.addReview(_id, review)
    .then(result => (result.nModified === 1 ? res.send() : next()))
    .catch(() => next());
};

exports.deleteReview = (req, res, next) => {
  const { _id } = req.body;
  Product.deleteReview(_id)
    .then(result => (result.nModified === 1 ? res.send() : next()))
    .catch(() => next());
};
