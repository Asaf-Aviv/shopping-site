const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String, required: true, trim: true, unique: true,
  },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  gender: { type: String, required: true, validate: /female|male/ },
  colors: [
    {
      id: false,
      color: { type: String, required: true },
      quantity: { type: Number },
    },
  ],
  sizes: [{ type: Number }],
  reviews: [
    {
      name: { type: String, required: true },
      body: { type: String, required: true },
      rating: { type: Number, required: true },
      timestamp: { type: Number, default: +new Date() },
    },
  ],
  rating: { type: Number, default: 0 },
});

productSchema.index({ type: 1 });

productSchema.statics.fetchProductsByPage = function (page) {
  return this.find().skip(page * 6).limit(6);
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
  if (total) {
    this.rating = (total / this.reviews.length).toFixed(1);
  }
  return this;
};

productSchema.statics.addReview = async function (_id, review) {
  const doc = await this.findById(_id);
  doc.reviews.unshift(review);

  return doc
    .calculateRating()
    .save();
};

productSchema.statics.deleteReview = async function (productId, reviewId) {
  const result = await this.updateOne(
    { _id: productId },
    { $pull: { reviews: { _id: reviewId } } },
  );

  const doc = await this.findById(productId);
  const reviewIndex = doc.reviews.findIndex(({ _id }) => _id.toString() === reviewId);

  doc
    .calculateRating()
    .reviews.splice(reviewIndex, 1);

  doc.save();
  return result;
};

const Product = mongoose.model('products', productSchema);
module.exports = Product;
