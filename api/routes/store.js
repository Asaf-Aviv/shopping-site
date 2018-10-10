const router = require('express').Router();
const ProductController = require('../controllers/product');

router.get('/products', ProductController.getAllProducts);

router.get('/product/:productId', ProductController.getProductById);

router.post('/product/add-quantity', ProductController.updateProductQuantity);

router.post('/product/add-product', ProductController.addProduct);

router.post('/product/add-review', ProductController.addReview);

router.delete('/product/delete-review', ProductController.deleteReview);

router.use((req, res) => res.status(500).send('Something went wrong.'));

module.exports = router;
