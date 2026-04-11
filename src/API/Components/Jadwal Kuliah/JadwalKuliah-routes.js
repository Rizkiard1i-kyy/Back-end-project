const express = require('express');
const router = express.Router();
const jadwalController = require('./JadwalKuliah-controller');

router.get('/', jadwalController.getJadwal);
router.post('/', jadwalController.postJadwal);

module.exports = router;
