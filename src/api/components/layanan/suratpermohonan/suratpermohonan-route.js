const express = require('express');
const router = express.Router();

const controller = require('./suratpermohonan-controller');
const { authMiddleware } = require('../../../../middlewares/auth');

router.post('/', requireMahasiswa, controller.create);

router.get('/', requireMahasiswa, controller.getAll);

module.exports = (app) => {
  app.use('/suratpermohonan', router);
};
