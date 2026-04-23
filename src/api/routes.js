const express = require('express');

const users = require('./components/users/users-route');
const auth = require('./components/auth/auth-route');
const kehadiran = require('./components/kehadiran/kehadiran-route');
const kalenderAkademik = require('./components/kalenderAkademik/kalenderAkademik-route');
const rps = require('./components/RPS/RPS-route');
const skpi = require('./components/skpi/skpi-route');
const jadwalKuliah = require('./components/akademic/JadwalKuliah/JadwalKuliah-route');
const biodata = require('./components/biodata/biodata/biodata-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  auth(app);
  kehadiran(app);
  kalenderAkademik(app);
  rps(app);
  skpi(app);
  jadwalKuliah(app);
  biodata(app);
  return app;
};
