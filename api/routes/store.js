const router = require('express').Router();
const ProductController = require('../controllers/product');

router.get('/products', ProductController.getAllProducts);

router.get('/products/:productId', ProductController.getProductById);

router.post('/products', ProductController.addProduct);

router.post('/products/quantity', ProductController.updateProductQuantity);

router.post('/products/reviews', ProductController.addReview);

router.delete('/products/reviews', ProductController.deleteReview);

router.use((err, req, res, next) => res.status(500).send(err));

module.exports = router;
