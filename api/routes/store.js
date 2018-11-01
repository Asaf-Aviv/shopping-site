const router = require('express').Router();
const ProductController = require('../controllers/product');

router.get('/products', ProductController.getAllProducts);

router.get('/product/:productId', ProductController.getProductById);

router.get('/products/search', ProductController.searchProductsByName);

router.post('/product', ProductController.addProduct);

router.post('/product/quantity', ProductController.updateProductQuantity);

router.post('/product/reviews', ProductController.addReview);

router.delete('/product/reviews', ProductController.deleteReview);

router.use((err, req, res, next) => res.status(500).send(err));

module.exports = router;
