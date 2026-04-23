const historiService = require('./historiNilai-service');
const { errorResponder, errorTypes } = require('../../../../core/errors');

async function getHistori(req, res, next) {
  try {
    const { NIM } = req.params;

    if (!NIM) {
      throw errorResponder(errorTypes.VALIDATION, 'NIM mahasiswa wajib dicantumkan!');
    }

    const histori = await historiService.getHistori(NIM);

    return res.status(200).json({
      status: 'success',
      message: 'Data histori nilai berhasil diambil',
      data: histori,
    });
  } catch (error) {
    return next(error);
  }
}

async function postHistori(req, res, next) {
  try {
    const dataBaru = req.body;

    if (!dataBaru || Object.keys(dataBaru).length === 0) {
      throw errorResponder(
        errorTypes.EMPTY_BODY,
        'Data Histori Nilai tidak boleh kosong!'
      );
    }

    const result = await historiService.postHistori(dataBaru);

    return res.status(201).json({
      status: 'success',
      message: 'Data histori nilai berhasil ditambahkan',
      data: result,
    });
  } catch (error) {
    if (error.code === 11000) {
      return next(
        errorResponder(
          errorTypes.DB_DUPLICATE_CONFLICT,
          'Gagal: Data nilai untuk NIM dan Kode Matkul tersebut sudah ada'
        )
      );
    }
    return next(error);
  }
}

async function updateHistori(req, res, next) {
  try {
    const { NIM, Kode, SKS, NilaiBobot } = req.body;

    if (!NIM || !Kode) {
      throw errorResponder(
        errorTypes.VALIDATION,
        'NIM dan Kode Mata Kuliah wajib diisi untuk melakukan update!'
      );
    }

    const result = await historiService.updateHistori(NIM, Kode, SKS, NilaiBobot);

    if (result.matchedCount === 0) {
      throw errorResponder(
        errorTypes.NOT_FOUND,
        `Data dengan NIM ${NIM} dan Kode ${Kode} tidak ditemukan!`
      );
    }

    return res.status(200).json({
      status: 'success',
      message: 'Data histori nilai berhasil diperbarui',
    });
  } catch (error) {
    return next(error);
  }
}

async function deleteHistori(req, res, next) {
  try {
    const { NIM, Kode } = req.body;

    if (!NIM || !Kode) {
      throw errorResponder(
        errorTypes.VALIDATION,
        'NIM dan Kode Mata Kuliah diperlukan untuk menghapus data!'
      );
    }

    const result = await historiService.deleteHistori(NIM, Kode);

    if (result.deletedCount === 0) {
      throw errorResponder(
        errorTypes.NOT_FOUND,
        'Gagal menghapus: Data tidak ditemukan!'
      );
    }

    return res.status(200).json({
      status: 'success',
      message: 'Data histori nilai berhasil dihapus',
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getHistori,
  postHistori,
  updateHistori,
  deleteHistori,
};