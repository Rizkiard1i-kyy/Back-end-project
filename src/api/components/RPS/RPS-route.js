const express = require('express');
const rpsController = require('./RPS-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/rps', route);

  route.get('/', rpsController.getAllRPS);
  route.post('/', rpsController.postRPS);
};
