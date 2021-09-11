const express = require('express');
const mongoose = require('mongoose');
const {StatusCodes} = require('http-status-codes');
const productsRoutes = require('./api/products-routes');
const cors = require('cors');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/furnicom', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', function () {
  console.log('Connected to furnicom db');
});

app.use(express.json(), cors());
app.use('/api', productsRoutes);
app.use('*', (req, res) => {
  res.sendFile('index.html');
});
app.use((err, req, res, next) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end(err);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
