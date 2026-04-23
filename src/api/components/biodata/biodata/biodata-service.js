const biodataRepository = require('./biodata-repository');

async function getAllBiodata() {
  return biodataRepository.getAllBiodata();
}

async function getBiodataByEmail(email) {
  return biodataRepository.getBiodataByEmail(email);
}

async function getBiodataById(id) {
  return biodataRepository.getBiodataById(id);
}

async function createBiodata(email, fullName, nim, jurusan, angkatan, noTelp, alamat) {
  return biodataRepository.createBiodata(email, fullName, nim, jurusan, angkatan, noTelp, alamat);
}

async function updateBiodata(id, fullName, nim, jurusan, angkatan, noTelp, alamat) {
  return biodataRepository.updateBiodata(id, fullName, nim, jurusan, angkatan, noTelp, alamat);
}

async function deleteBiodata(id) {
  return biodataRepository.deleteBiodata(id);
}

module.exports = {
  getAllBiodata,
  getBiodataByEmail,
  getBiodataById,
  createBiodata,
  updateBiodata,
  deleteBiodata,
};
