const mongoose = require('mongoose');
const reviewSchema = require('./review');

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
}, { bufferCommands: false });

productSchema.pre('save', function (next) {
  this.colors.forEach((colorDoc) => {
    colorDoc.color = colorDoc.color[0].toUpperCase() + colorDoc.color.slice(1).toLowerCase();
  });
  next();
});

productSchema.statics.findAll = function () {
  return new Promise(resolve => resolve(this.find()));
};

productSchema.statics.addProduct = function (product) {
  return new Promise(resolve => resolve(new this({ ...product })
    .save()));
};

productSchema.statics.addQuantity = function (productId, color, quantityToAdd) {
  return new Promise(resolve => resolve(this.updateOne(
    { _id: productId, 'colors.color': color },
    { $inc: { 'colors.$.quantity': quantityToAdd } },
  )));
};

productSchema.statics.addReview = function (_id, review) {
  return new Promise(resolve => resolve(this.updateOne(
    { _id },
    { $push: { reviews: { $each: [review], $position: 0 } } },
  )));
};

productSchema.statics.deleteReview = function (_id) {
  return new Promise(resolve => resolve(this.updateOne(
    { 'reviews._id': _id },
    { $pull: { reviews: { _id } } },
  )));
};

productSchema.pre('update', function () {
  console.log('update ? ');
  if (this.getUpdate().reviews) {
    console.log('update review');
  }
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;
