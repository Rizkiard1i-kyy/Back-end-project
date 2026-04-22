const express = require('express');

const users = require('./components/users/users-route');
const auth = require('./components/auth/auth-route');
const kehadiran = require('./components/kehadiran/kehadiran-route');
const kalenderAkademik = require('./components/kalenderAkademik/kalenderAkademik-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  auth(app);
  kehadiran(app);
  kalenderAkademik(app);
  return app;
};
