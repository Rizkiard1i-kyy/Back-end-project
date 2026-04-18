const express = require('express');
const route = express.Router();
const skpiController = require('../controllers/skpi-controller');

module.exports = (app) => {
    app.use('/api/skpi', route);
    route.get('/', skpiController.getKegiatan);
    route.post('/', skpiController.tambahKegiatan);
    route.delete('/:id', skpiController.deleteKegiatan);
};