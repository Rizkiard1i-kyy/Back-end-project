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
    if (error.code === 11000) {
      return next(
        errorResponder(
          errorTypes.DB_DUPLICATE_CONFLICT,
          'Gagal: Kode Mata Kuliah duplikat'
        )
      );
    }
    if (error.message.includes('wajib diisi')) {
      return next(errorResponder(errorTypes.VALIDATION, error.message));
    }
    return next(error);
  }
}

async function updateKehadiran(req, res, next) {
  try {
    const { kodeMatkul } = req.params;
    const updateData = req.body;

    const kehadiranTerbaru = await kehadiranService.updateKehadiran(
      kodeMatkul,
      updateData
    );

    if (!kehadiranTerbaru) {
      return res.status(404).json({
        status: 'error',
        message:
          'Data kehadiran tidak ditemukan. Jika anda tidak kesalahan menulis, mohon meminta admin untuk melakukan post data kehadiran baru.',
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

module.exports = {
  getKehadiran,
  postKehadiran,
  updateKehadiran,
};
