const express = require('express');
const controller = require('./suratketerangan-controller');
const { authMiddleware } = require('../../../middlewares/authentication'); // tambahkan ini

module.exports = (router) => {
  const route = express.Router();

  route.post('/', authMiddleware, controller.createsuratketerangan); // ← tambah authMiddleware
  route.get('/', authMiddleware, controller.getallsuratketerangan); // ← tambah authMiddleware

  router.use('/suratketerangan', route);
};
