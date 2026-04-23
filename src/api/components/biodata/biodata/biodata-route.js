const express = require('express');
const biodataController = require('./biodata-controller');
const { requireMahasiswa, requireDosenOrAdmin, requireAdmin } = require('../../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/biodata', route);

  route.get('/saya', requireMahasiswa, biodataController.getBiodataSaya);

  route.post('/', requireMahasiswa, biodataController.createBiodata);

  route.put('/:id', requireMahasiswa, biodataController.updateBiodata);

  route.get('/', requireDosenOrAdmin, biodataController.getAllBiodata);

  route.delete('/:id', requireAdmin, biodataController.deleteBiodata);
};
