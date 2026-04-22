const express = require('express');

const users = require('./components/users/users-route');
const skpiRoutes = require('./components/skpi/skpi-route');
const rpsRoutes = require('./components/RPS/RPS-route');
const jadwalRoutes = require('./components/akademic/JadwalKuliah/JadwalKuliah-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  skpiRoutes(app);
  rpsRoutes(app);
  jadwalRoutes(app);

  return app;
};
