const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  images: [String]
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
