const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  price: Number
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
