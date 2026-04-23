const kalenderAkademikService = require('./kalenderAkademik-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getKalender(req, res, next) {
  try {
    const semester = req.query.semester;
    const kalender = await kalenderAkademikService.getKalender(semester);

    return res.status(200).json({
      status: 'success',
      message: 'Data kalender akademik berhasil diambil',
      data: kalender,
    });
  } catch (error) {
    return next(error);
  }
}

async function postKalender(req, res, next) {
  try {
    let newKalender = req.body;
    if (!newKalender || Object.keys(newKalender).length === 0) {
      throw errorResponder(
        errorTypes.EMPTY_BODY,
        'Data kalender tidak boleh kosong'
      );
    }

    newKalender = await kalenderAkademikService.postKalender(newKalender);

    return res.status(201).json({
      status: 'success',
      message: 'Data kalender baru berhasil ditambahkan',
      data: newKalender,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getKalender,
  postKalender,
};
