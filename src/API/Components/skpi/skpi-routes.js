const express = require('express');
const router = express.Router();
const skpiController = require('./skpi-controller');

router.get('/', skpiController.getKegiatan);
router.post('/', skpiController.tambahKegiatan);
router.delete('/:id', skpiController.deleteKegiatan);

module.exports = router;
