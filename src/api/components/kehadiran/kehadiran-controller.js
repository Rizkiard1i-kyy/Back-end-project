const kehadiranService = require('./kehadiran-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getKehadiran(req, res, next) {
  try {
    const semester = req.query.semester;
    const kehadiran = await kehadiranService.getKehadiran(semester);

    return res.status(200).json({
      status: 'success',
      message: 'Data kehadiran berhasil diambil',
      data: kehadiran,
    });
  } catch (error) {
    return next(error);
  }
}

async function postKehadiran(req, res, next) {
  try {
    let newKehadiran = req.body;
    if (!newKehadiran || Object.keys(newKehadiran).length === 0) {
      throw errorResponder(
        errorTypes.EMPTY_BODY,
        'Data kehadiran tidak boleh kosong'
      );
    }

    newKehadiran = await kehadiranService.postKehadiran(newKehadiran);

    return res.status(201).json({
      status: 'success',
      message: 'Data kehadiran baru berhasil ditambahkan',
      data: newKehadiran,
    });
  } catch (error) {
    if (error.message.includes('wajib diisi')) {
      return next(errorResponder(errorTypes.VALIDATION, error.message));
    }
    return next(error);
  }
}

async function updateKehadiran(req, res, next) {
  try {
    const { kodeMatkul, emailMahasiswa } = req.params;
    const updateData = req.body;

    const kehadiranTerbaru = await kehadiranService.updateKehadiran(
      kodeMatkul,
      emailMahasiswa,
      updateData
    );

    if (!kehadiranTerbaru) {
      return res.status(404).json({
        status: 'error',
        message:
          'Data kehadiran tidak ditemukan. Mohon periksa kembali input kode mata kuliah atau email mahasiswa.',
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Pembaruan data kehadiran berhasil',
      data: kehadiranTerbaru,
    });
  } catch (error) {
    return next(error);
  }
}

async function getKehadiranSaya(req, res, next) {
  try {
    const emailMahasiswa = req.user.email;
    const semester = req.query.semester;

    const dataKehadiranSaya =
      await kehadiranService.getKehadiranSaya(emailMahasiswa);

    return res.status(200).json({
      status: 'success',
      message: 'Data kehadiran anda berhasil diambil',
      data: dataKehadiranSaya,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getKehadiran,
  postKehadiran,
  updateKehadiran,
  getKehadiranSaya,
};
