const skpiService = require('../services/skpi-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

class SkpiController {
    async tambahKegiatan(req, res) {
        try {
            const result = await skpiService.tambahKegiatan(req.body);
            
            res.status(201).json({
                success: true,
                message: 'Kegiatan berhasil ditambahkan',
                data: result
            });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async getKegiatan(req, res) {
        try {
            const result = await skpiService.dapatkanSemuaKegiatan();
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async deleteKegiatan(req, res) {
        try {
            const { id } = req.params;
            await skpiService.hapusKegiatan(id);
            
            res.status(200).json({
                success: true,
                message: 'Data kegiatan berhasil dihapus'
            });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }
}

module.exports = new SkpiController();