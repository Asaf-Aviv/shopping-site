const Product = require('../../models/Product');

exports.getAllProducts = (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(err => next(err));
};

exports.getProductById = (req, res, next) => {
  Product.findById(req.params.productId)
    .then(product => (product
      ? res.send(product)
      : res.status(404).send({ message: 'Product not found!' })))
    .catch(err => next(err));
};

exports.addProduct = (req, res, next) => {
  const { product } = req.body;

  Product.addProduct(product)
    .then(result => res.send(result))
    .catch(err => next(err));
};

exports.updateProductQuantity = (req, res, next) => {
  const { productId, color, quantity } = req.body;

  Product.updateQuantity(productId, color, quantity)
    .then((result) => {
      if (!result.n) return res.status(404).json({ message: 'Product not found!' });
      if (!result.nModified || !result.ok) return next();
      return res.send();
    })
    .catch(err => next(err));
};

exports.addReview = (req, res, next) => {
  const { productId, review } = req.body;

  Product.addReview(productId, review)
    .then(() => res.send())
    .catch(err => next(err));
};

exports.deleteReview = (req, res, next) => {
  const { reviewId } = req.body;

  Product.deleteReview(reviewId)
    .then((result) => {
      if (!result.n) return res.status(404).json({ message: 'Review not found!' });
      if (!result.nModified || !result.ok) return next();
      return res.send();
    })
    .catch(err => next(err));
};
