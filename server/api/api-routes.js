const express = require('express');
const Product = require('../models/product');
const {StatusCodes} = require('http-status-codes');
const formidable = require('formidable');
const fs = require('fs');
const config = require('../config/config');
const path = require('path');

const router = express.Router();

router.get('/public', (req, res) => {
  res.end('Public data');
});

router.get('/private', (req, res) => {
  res.end('Private data');
});

router.get('/products', (req, res) => {
  Product.find(function (err, products) {
    if (err) return console.error(err);
    res.send(products);
  });
});

router.post('/products', (req, res) => {
  const form = formidable({multiples: true});
  form.parse(req, (err, productProperties, files) => {
    if (err) {
      res.status(StatusCodes.BAD_REQUEST).send(err);
      return;
    }

    const imageFiles = files.images;
    const promises = imageFiles.map(image => {
      const sourcePath = image.path; // temporary system dir
      const destinationPath = path.join(config.productImagesPath, image.name);
      return copyFile(sourcePath, destinationPath);
    });

    Promise.all(promises).then(() => {
      const product = new Product({
        name: productProperties.name,
        price: productProperties.price,
        images: imageFiles.map(file => file.name)
      });
      product.save(function (err) {
        if (err) {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
          return;
        }
        res.send(product);
      });
    }).catch(err => {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
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

function copyFile(sourcePath, destinationPath) {
  const input = fs.createReadStream(sourcePath);
  const output = fs.createWriteStream(destinationPath);
  return new Promise((resolve, reject) => {
    output.on('error', reject);
    input.on('error', reject);
    input.on('end', resolve);
    input.pipe(output);
  });
}

module.exports = router;
