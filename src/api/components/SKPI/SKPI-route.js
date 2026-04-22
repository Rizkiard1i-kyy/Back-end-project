const express = require('express');
const skpiController = require('./skpi-controller');
const route = express.Router();

module.exports = (app) => {
  app.use('/skpi', route);

  route.get('/', skpiController.getKegiatan);
  route.post('/', skpiController.tambahKegiatan);
  route.delete('/:id', skpiController.deleteKegiatan);
};
