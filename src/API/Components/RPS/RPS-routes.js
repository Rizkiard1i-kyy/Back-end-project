const express = require('express');
const router = express.Router();
const rpsController = require('./RPS-controller');

router.get('/', rpsController.getAllRPS);

router.post('/', rpsController.postRPS);

module.exports = router;