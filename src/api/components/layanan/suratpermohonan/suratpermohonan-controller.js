const service = require('./suratpermohonan-service');
const { errorResponder, errorTypes } = require('../../../../core/errors');

const createsuratpermohonan = async (req, res, next) => {
  try {
    if (!req.user)
      throw errorResponder(errorTypes.UNAUTHORIZED, 'User belum login');
    const { nim, nama, prodi, bahasa, jenis } = req.body;
    const result = await service.createsuratpermohonan({
      userId: req.user.id || req.user._id,
      nim,
      nama,
      prodi,
      bahasa,
      jenis,
    });
    return res
      .status(201)
      .json({ message: 'Surat permohonan berhasil dibuat', data: result });
  } catch (error) {
    return next(error);
  }
};

const getallsuratpermohonan = async (req, res, next) => {
  try {
    if (!req.user)
      throw errorResponder(errorTypes.UNAUTHORIZED, 'User belum login');
    const result = await service.getallsuratpermohonan(req.user);
    return res
      .status(200)
      .json({ message: 'Data surat permohonan', data: result });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createsuratpermohonan,
  getallsuratpermohonan,
};
