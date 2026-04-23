const biodataService = require('./biodata-service');
const { errorResponder, errorTypes } = require('../../../../core/errors');

async function getAllBiodata(request, response, next) {
  try {
    const biodata = await biodataService.getAllBiodata();
    return response.status(200).json(biodata);
  } catch (error) {
    return next(error);
  }
}

async function getBiodataSaya(request, response, next) {
  try {
    const email = request.user.email; // ambil dari token
    const biodata = await biodataService.getBiodataByEmail(email);
    if (!biodata) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Biodata tidak ditemukan');
    }
    return response.status(200).json(biodata);
  } catch (error) {
    return next(error);
  }
}

async function createBiodata(request, response, next) {
  try {
    const email = request.user.email; // ambil dari token
    const { full_name: fullName, nim, jurusan, angkatan, no_telp: noTelp, alamat } = request.body;

    const biodata = await biodataService.createBiodata(email, fullName, nim, jurusan, angkatan, noTelp, alamat);
    return response.status(201).json({ message: 'Biodata berhasil dibuat', data: biodata });
  } catch (error) {
    return next(error);
  }
}

async function updateBiodata(request, response, next) {
  try {
    const { full_name: fullName, nim, jurusan, angkatan, no_telp: noTelp, alamat } = request.body;

    const biodata = await biodataService.getBiodataById(request.params.id);
    if (!biodata) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Biodata tidak ditemukan');
    }

    await biodataService.updateBiodata(request.params.id, fullName, nim, jurusan, angkatan, noTelp, alamat);
    return response.status(200).json({ message: 'Biodata berhasil diupdate' });
  } catch (error) {
    return next(error);
  }
}

async function deleteBiodata(request, response, next) {
  try {
    const biodata = await biodataService.getBiodataById(request.params.id);
    if (!biodata) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Biodata tidak ditemukan');
    }

    await biodataService.deleteBiodata(request.params.id);
    return response.status(200).json({ message: 'Biodata berhasil dihapus' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllBiodata,
  getBiodataSaya,
  createBiodata,
  updateBiodata,
  deleteBiodata,
};
