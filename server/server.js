const express = require('express');
const mongoose = require('mongoose');
const {StatusCodes} = require('http-status-codes');
const apiRoutes = require('./api/api-routes');
const dbConfig = require('./config/db-config');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json(), cors());

mongoose.connect(dbConfig.uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', function () {
  console.log('Connected to furnicom db');

  app.use('/api', apiRoutes);

  app.post('/login', (req, res) => {
    console.log(req.body);
    /*
    1 get credentials data {username: '...', password: '...'}
    2 find user in data base
    3 if exists authorize
      else return errors
    */
  });

  app.post('/logout', () => {
    // remove user authorization information
  });

  app.post('/register', (req, res) => {
    const registrationData = req.body;
    const user = User.findOne({
      $or: [
        {'username': registrationData.username},
        {'email': registrationData.email}
      ]
    });
    if (user) {
      res.status(StatusCodes.BAD_REQUEST).send();
    } else {
      // User.create({
      //   username: registrationData.username,
      //   emial: registrationData.email,
      //
      // });
    }

    /*


    3 if exists -> handle errors
      else create new user
    */
  });

  app.use('*', (req, res) => {
    res.sendFile('index.html');
  });
  app.use((err, req, res, next) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).end(err);
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
