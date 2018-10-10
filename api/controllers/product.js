const Product = require('../../models/Product');

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

exports.updateProductQuantity = (req, res, next) => {
  const { productId, color, quantity } = req.body;
  Product.updateQuantity(productId, color, quantity)
    .then(result => (result.nModified === 1 ? res.send() : next()))
    .catch(() => next());
};

exports.addReview = (req, res, next) => {
  const { _id, review } = req.body;
  Product.addReview(_id, review)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.deleteReview = (req, res, next) => {
  const { _id } = req.body;
  Product.deleteReview(_id)
    .then(result => (result.nModified === 1 ? res.send() : next()))
    .catch(() => next());
};
