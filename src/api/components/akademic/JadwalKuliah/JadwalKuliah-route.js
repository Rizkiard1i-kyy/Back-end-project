const express = require('express');
const jadwalController = require('./JadwalKuliah-controller');
const route = express.Router();
const { requireDosen } = require('../../../middlewares');
const { requireMahasiswa } = require('../../../middlewares');

module.exports = (app) => {
  app.use('/jadwalKuliah', route);
  route.get('/', requireMahasiswa, jadwalController.getJadwal);
  route.post('/', requireDosen, jadwalController.postJadwal);
};
