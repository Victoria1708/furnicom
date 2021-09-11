const express = require('express');
const Product = require('../models/product');
const {StatusCodes} = require('http-status-codes');
const formidable = require('formidable');
const fs = require('fs');
const config = require('../config/config');
const path = require('path');

const router = express.Router();

router.get('/products', (req, res) => {
  Product.find(function (err, products) {
    if (err) return console.error(err);
    res.send(products);
  });
});

router.post('/products', (req, res) => {
  const form = formidable({multiples: true});
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(StatusCodes.BAD_REQUEST).send(err);
      return;
    }
    const tmpPath = files.img.path;
    const filePath = path.join(config.productImagesPath, files.img.name);
    const fileData = fs.readFileSync(tmpPath);
    fs.writeFile(filePath, fileData, function (err) {
      if (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        return;
      }
      const product = new Product({
        name: fields.name,
        price: fields.price,
        imgUrl: 'image url' // TODO
      });
      product.save(function (err) {
        if (err) {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
          return;
        }
        res.send(product);
      });
    });
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
