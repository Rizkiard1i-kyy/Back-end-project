const express = require('express');

const historiNilaiController = require('./historiNilai-controller');

const {requireDosen} = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/historiNilai', route);

  route.get('/', historiNilaiController.getHistori);
  route.put('/:id', requireDosen, historiNilaiController.updateHistori);
};
