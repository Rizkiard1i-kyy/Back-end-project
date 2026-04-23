const express = require('express');
const controller = require('./suratpermohonan-controller');
const { authMiddleware } = require('../../../middlewares/authentication');

module.exports = (router) => {
  const route = express.Router();

  route.post('/', authMiddleware, controller.createsuratpermohonan); // ← tambah authMiddleware
  route.get('/', authMiddleware, controller.getallsuratpermohonan); // ← tambah authMiddleware

  router.use('/suratpermohonan', route);
};
