const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  body: {
    type: String,
    required: true,
    minlength: 4,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
}, { timestamps: true });

module.exports = reviewSchema;
