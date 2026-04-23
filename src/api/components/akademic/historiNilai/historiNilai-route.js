const express = require('express');

const historiController = require('./historiNilai-controller');

const { requireRole } = require('../../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/historiNilai', route);

  route.get(
    '/:NIM',
    requireRole('dosen', 'mahasiswa', 'admin'),
    historiController.getHistori
  );

  route.post(
    '/', 
    requireRole('dosen'), 
    historiController.postHistori
  );

  route.put(
    '/', 
    requireRole('dosen'), 
    historiController.updateHistori
  );

  route.delete(
    '/', 
    requireRole('admin'), 
    historiController.deleteHistori
  );
};