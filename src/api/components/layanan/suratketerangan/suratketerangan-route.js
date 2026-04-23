const express = require('express');
const controller = require('./suratketerangan-controller');

const router = express.Router();

router.post('/', requireMahasiswa, controller.createsuratketerangan);
router.get('/', requireMahasiswa, controller.getallsuratketerangan);

module.exports = router;
