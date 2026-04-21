const express = require('express');

const nilaiKHSController = require('./nilaiKHS-controller');

const {requireDosen} = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/nilaiKHS', route);

  route.get('/', nilaiKHSController.getKHS);
  route.get('/:tahun', nilaiKHSController.getKHS);
  route.put('/:id', requireDosen, nilaiKHSController.updateKHS);
};
