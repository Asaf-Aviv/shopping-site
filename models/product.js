const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String, required: true, trim: true, unique: true,
  },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  onSale: { type: Number, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  gender: { type: String, required: true, validate: /Female|Male/ },
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
  reviews: [{
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    body: { type: String, required: true, minlength: 4 },
    timestamp: { type: Date, default: Date.now() },
  }],
  rating: { type: Number, default: 0 },
});

productSchema.index({ type: 1 });

productSchema.statics.findAll = function () {
  return this.find();
};

productSchema.statics.searchProducts = function (productNameRegex) {
  return this.find({ name: productNameRegex });
};

productSchema.statics.addProduct = function (product) {
  return new this({ ...product }).save();
};

productSchema.statics.updateQuantity = function (productId, color, quantity) {
  return this.updateOne(
    { _id: productId, 'colors.color': color },
    { $inc: { 'colors.$.quantity': quantity } },
  );
};

productSchema.methods.calculateRating = function () {
  const total = this.reviews.reduce((sum, reviewObj) => sum + reviewObj.rating, 0);
  this.rating = (total / this.reviews.length).toFixed(1);
};

productSchema.statics.addReview = async function (_id, review) {
  const doc = await this.findById(_id);
  doc.reviews.unshift(review);
  doc.calculateRating();

  return doc.save();
};

productSchema.statics.deleteReview = function (reviewId) {
  return this.updateOne(
    { 'reviews._id': reviewId },
    { $pull: { reviews: { reviewId } } },
  );
};

const Product = mongoose.model('products', productSchema);
module.exports = Product;
