const router = require('express').Router();
const orderController = require('../controllers/order');

router.post('/orders', orderController.createOrder);

router.use((err, req, res, next) => res.status(500).send(err));

module.exports = router;
