const express = require('express');

const kehadiranController = require('./kehadiran-controller');
const { requireRole } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/kehadiran', route);

  route.get(
    '/',
    requireRole('dosen', 'mahasiswa', 'admin'),
    kehadiranController.getKehadiran
  );
  route.post('/', requireRole('admin'), kehadiranController.postKehadiran);
  route.put(
    '/:kodeMatkul',
    requireRole('dosen'),
    kehadiranController.updateKehadiran
  );
};
