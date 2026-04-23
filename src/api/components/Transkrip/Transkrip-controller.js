const TranskripService = require('./Transkrip-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getTranskrip(req, res, next) {
  try {
    const nim = req.query.nim;
    const transkrip = await TranskripService.getTranskrip(nim);
    return res.status(200).json({
      status: 'success',
      message: 'Data transkrip berhasil diambil',
      data: transkrip,
    });
  } catch (error) {
    return next(error);
  }
}

async function postTranskrip(req, res, next) {
  try {
    let newTranskrip = req.body;
    if (!newTranskrip || Object.keys(newTranskrip).length === 0) {
      throw errorResponder(
        errorTypes.EMPTY_BODY,
        'Data transkrip tidak boleh kosong'
      );
    }
    const transkrip = await TranskripService.postTranskrip(newTranskrip);
    return res.status(201).json({
      status: 'success',
      message: 'Data transkrip berhasil ditambahkan',
      data: transkrip,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getTranskrip,
  postTranskrip,
};
