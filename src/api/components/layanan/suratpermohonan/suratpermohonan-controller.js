const service = require('./suratpermohonan-service');

// CREATE
const create = async (req, res) => {
  try {
    const result = await service.createSuratPermohonan(req.body);

    return res.status(201).json({
      message: 'Surat permohonan berhasil dibuat',
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// GET
const getAll = async (req, res) => {
  try {
    const result = await service.getAllSurat(req.user);

    return res.status(200).json({
      message: 'List surat permohonan',
      data: result,
    });
  } catch (error) {
    return res.status(403).json({
      message: error.message,
    });
  }
};

module.exports = {
  create,
  getAll,
};
