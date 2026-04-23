const express = require('express');

const users = require('./components/users/users-route');
const auth = require('./components/auth/auth-route');
const rps = require('./components/RPS/RPS-route');
const skpi = require('./components/skpi/skpi-route');
const jadwalKuliah = require('./components/akademic/JadwalKuliah/JadwalKuliah-route');
const biodata = require('./components/biodata/biodata/biodata-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  auth(app);
  rps(app);
  skpi(app);
  jadwalKuliah(app);
  biodata(app);
  return app;
};
