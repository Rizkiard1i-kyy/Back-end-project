const express = require('express');
const rpsController = require('./RPS-controller');
//const {requireDosen} = require('../../middlewares');
const { requireDosenOrAdmin } = require('../../middlewares');
const { requireMahasiswa } = require('../../middlewares');
const route = express.Router();

module.exports = (app) => {
  app.use('/rps', route);

  route.get('/', requireMahasiswa, rpsController.getAllRPS);
  route.post('/', requireDosenOrAdmin, rpsController.postRPS);
};
