const express = require('express');
const Product = require('../models/product');
const {StatusCodes} = require('http-status-codes');

const router = express.Router();

router.get('/products/', (req, res) => {
  Product.find(function (err, products) {
    if (err) return console.error(err);
    res.send(products);
  });
});

router.post('/products/', (req, res) => {
  const todoTaskDTO = req.body;
  if (!todoTaskDTO) {
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
  const product = new Product({
    name: todoTaskDTO.name,
    price: todoTaskDTO.price,
    imgUrl: todoTaskDTO.imgUrl
  });
  product.save(function (err) {
    if (err) return console.log(err);
    res.send(product);
  });
});

router.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  if (!req.body || !productId) {
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
  const product = {...req.body};
  Product.findOneAndUpdate({_id: productId}, product, {new: true}, function (err, product) {
    if (err) return console.log(err);
    res.send(product);
  });
});

router.delete('/products/:id', (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId, {}, function (err, product) {
    if (err) return console.error(err);
    res.end();
  });
});

module.exports = router;
