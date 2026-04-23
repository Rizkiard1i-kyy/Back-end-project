const express = require('express');
const skpiController = require('./skpi-controller');
const route = express.Router();
const { requireMahasiswa } = require('../../middlewares');

module.exports = (app) => {
  app.use('/skpi', route);

  route.get('/', requireMahasiswa, skpiController.getKegiatan);
  route.post('/', requireMahasiswa, skpiController.tambahKegiatan);
  route.delete('/:id', requireMahasiswa, skpiController.deleteKegiatan);
};
