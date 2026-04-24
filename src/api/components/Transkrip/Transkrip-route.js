const express = require('express');
const transkripController = require('./Transkrip-controller');
const { authMiddleware, requireRole } = require('../../middlewares');
const route = express.Router();

module.exports = (app) => {
  app.use('/transkrip', route);

  // FIX: apply authMiddleware to all routes so authentication is always checked
  route.use(authMiddleware);

  route.get('/', requireRole('mahasiswa'), transkripController.getTranskrip);
  route.post(
    '/',
    requireRole('admin', 'dosen'),
    transkripController.postTranskrip
  );
};
