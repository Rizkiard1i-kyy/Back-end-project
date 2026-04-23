const express = require('express');
const controller = require('./suratpermohonan-controller');
const { authMiddleware } = require('../../../middlewares/authentication');

module.exports = (router) => {
  const route = express.Router();

  route.post('/', authMiddleware, controller.createsuratpermohonan);
  route.get('/', authMiddleware, controller.getallsuratpermohonan);

  router.use('/suratpermohonan', route);
};
