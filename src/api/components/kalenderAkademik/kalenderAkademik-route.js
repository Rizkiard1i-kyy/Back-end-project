const express = require('express');

const kalenderAkademikController = require('./kalenderAkademik-controller');
const { requireRole } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/kalender', route);

  route.get(
    '/',
    requireRole('dosen', 'mahasiswa', 'admin'),
    kalenderAkademikController.getKalender
  );
  route.post(
    '/',
    requireRole('admin'),
    kalenderAkademikController.postKalender
  );
};
