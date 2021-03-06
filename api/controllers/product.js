const Product = require('../../models/Product');

exports.searchProductsByQuery = async (req, res, next) => {
  try {
    const { pagination } = req.query;

    const query = Object.keys(req.query).reduce((queryObj, key) => {
      if (key === 'discount') {
        queryObj[key] = { $gt: 0 };
      } else if (key === 'colors') {
        queryObj[`${key}.color`] = { $in: req.query[key].split(',') };
      } else if (key !== 'pagination') {
        queryObj[key] = { $in: req.query[key].split(',') };
      }
      return queryObj;
    }, {});

    const products = await Product.find(query)
      .skip(pagination * 6)
      .limit(6);

    res.send(products);
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    product ? res.send(product) : res.status(404).json({ message: 'Product not found!' });
  } catch (error) {
    next(error);
  }
};

exports.searchProductsByName = async (req, res, next) => {
  try {
    const productNameRegex = new RegExp(`${req.query.productName}`, 'i');
    const products = await Product.searchProducts(productNameRegex);
    res.send(products);
  } catch (error) {
    next(error);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const { product } = req.body;
    const result = await Product.addProduct(product);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

exports.updateProductQuantity = async (req, res, next) => {
  try {
    const { productId, color, quantity } = req.body;
    const result = await Product.updateQuantity(productId, color, quantity);
    if (!result.n) {
      res.status(404).json({ message: 'Product not found!' });
      return;
    }
    if (!result.nModified || !result.ok) {
      next();
      return;
    }
    res.send();
    return;
  } catch (error) {
    next(error);
  }
};

exports.addReview = async (req, res, next) => {
  try {
    const { productId, review } = req.body;
    const result = await Product.addReview(productId, review);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const { productId, reviewId } = req.body;
    const result = await Product.deleteReview(productId, reviewId);

    if (!result.n) {
      res.status(404).json({ message: 'Review not found!' });
      return;
    }

    if (!result.nModified || !result.ok) {
      next();
      return;
    }

    res.send();

    // const doc = await Product.findById(productId);

    // await doc.calculateRating();
    // await doc.save();
    return;
  } catch (error) {
    next(error);
  }
};
