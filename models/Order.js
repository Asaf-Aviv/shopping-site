const mongoose = require('mongoose');
const orderid = require('order-id')(process.env.ORDER_SECRET);

const orderSchema = new mongoose.Schema({
  orderid: {
    type: String,
    unique: true,
    default: orderid.generate(),
  },
  items: [],
  totalPrice: {
    type: Number,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;
