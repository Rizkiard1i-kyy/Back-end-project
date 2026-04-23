const express = require('express');
const transkripController = require('./Transkrip-controller');
const { requireRole } = require('../../middlewares');
const route = express.Router();

module.exports = (app) => {
  app.use('/transkrip', route);
  route.get('/', requireRole('mahasiswa'), transkripController.getTranskrip);
  route.post(
    '/',
    requireRole('admin', 'dosen'),
    transkripController.postTranskrip
  );
};
