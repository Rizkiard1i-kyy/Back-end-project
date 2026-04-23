const express = require('express');

const users = require('./components/users/users-route');
const auth = require('./components/auth/auth-route');
const rps = require('./components/RPS/RPS-route');
const skpi = require('./components/skpi/skpi-route');
const jadwalKuliah = require('./components/akademic/JadwalKuliah/JadwalKuliah-route');
const suratketerangan = require('./components/layanan/suratketerangan/suratketerangan-route');
const suratpermohonan = require('./components/layanan/suratpermohonan/suratpermohonan-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  auth(app);
  rps(app);
  skpi(app);
  jadwalKuliah(app);
  suratketerangan(app);
  suratpermohonan(app);
  return app;
};
