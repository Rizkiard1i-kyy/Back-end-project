const suratService = require('./suratketerangan-service');
const { errorResponder, errorTypes } = require('../../../../core/errors');

/**
 * CREATE SURAT KETERANGAN
 */
const createsuratketerangan = async (req, res, next) => {
  try {
    if (!req.user) {
      throw errorResponder(errorTypes.UNAUTHORIZED, 'User belum login');
    }

    const { nim, nama, prodi, bahasa, jenis } = req.body;

    const result = await suratService.createsuratketerangan({
      userId: req.user.id || req.user._id,
      nim,
      nama,
      prodi,
      bahasa,
      jenis,
    });

    return res.status(201).json({
      message: 'Surat keterangan berhasil dibuat',
      data: result,
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * GET ALL SURAT KETERANGAN
 */
const getallsuratketerangan = async (req, res, next) => {
  try {
    if (!req.user) {
      throw errorResponder(errorTypes.UNAUTHORIZED, 'User belum login');
    }

    const result = await suratService.getallsuratketerangan(req.user);

    return res.status(200).json({
      message: 'Data surat keterangan',
      data: result,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createsuratketerangan,
  getallsuratketerangan,
};
