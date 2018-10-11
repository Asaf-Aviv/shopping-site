const mongoose = require('mongoose');
const reviewSchema = require('./Review');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  onSale: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  colors: [{
    _id: false,
    color: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  }],
  sizes: [{ type: String }],
  reviews: [reviewSchema],
  rating: {
    type: Number,
    default: 0,
  },
});

productSchema.index({ type: 1 });

productSchema.statics.findAll = function () {
  return new Promise(resolve => resolve(this.find()));
};

productSchema.statics.addProduct = function (product) {
  return new Promise(resolve => resolve(new this({ ...product })
    .save()));
};

productSchema.statics.updateQuantity = function (productId, color, quantity) {
  return new Promise(resolve => resolve(this.updateOne(
    { _id: productId, 'colors.color': color },
    { $inc: { 'colors.$.quantity': quantity } },
  )));
};

productSchema.methods.calculateRating = function () {
  const total = this.reviews.reduce((sum, reviewObj) => sum + reviewObj.rating, 0);
  this.rating = (total / this.reviews.length).toFixed(1);
};

productSchema.statics.addReview = async function (_id, review) {
  const doc = await this.findById(_id);
  doc.reviews.unshift(review);
  doc.calculateRating();

  return new Promise(resolve => resolve(doc.save()));
};

productSchema.statics.deleteReview = function (reviewId) {
  return new Promise(resolve => resolve(this.updateOne(
    { 'reviews._id': reviewId },
    { $pull: { reviews: { reviewId } } },
  )));
};

const Product = mongoose.model('products', productSchema);
module.exports = Product;
