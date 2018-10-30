const mongoose = require('mongoose');
const orderid = require('order-id')(process.env.ORDER_SECRET);

const orderSchema = new mongoose.Schema({
  orderId: { type: String, unique: true, default: orderid.generate() },
  items: [],
  totalPrice: { type: Number, required: true },
  timestamp: { type: Number, default: +new Date() },
});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;
