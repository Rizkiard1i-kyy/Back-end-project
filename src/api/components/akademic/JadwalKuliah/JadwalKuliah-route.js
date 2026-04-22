const express = require('express');
const jadwalController = require('./JadwalKuliah-controller');
const route = express.Router();

module.exports = (app) => {
  app.use('/jadwalKuliah', route);
  route.get('/', jadwalController.getJadwal);
  route.post('/', jadwalController.postJadwal);
};
