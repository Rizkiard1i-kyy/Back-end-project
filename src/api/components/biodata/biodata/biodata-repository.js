const { Biodata } = require('../../../../models');

async function getAllBiodata() {
  return Biodata.find({});
}

async function getBiodataByEmail(email) {
  return Biodata.findOne({ email });
}

async function getBiodataById(id) {
  return Biodata.findById(id);
}

async function createBiodata(email, fullName, nim, jurusan, angkatan, noTelp, alamat) {
  return Biodata.create({ email, fullName, nim, jurusan, angkatan, noTelp, alamat });
}

async function updateBiodata(id, fullName, nim, jurusan, angkatan, noTelp, alamat) {
  return Biodata.updateOne(
    { _id: id },
    { $set: { fullName, nim, jurusan, angkatan, noTelp, alamat } }
  );
}

async function deleteBiodata(id) {
  return Biodata.deleteOne({ _id: id });
}

module.exports = {
  getAllBiodata,
  getBiodataByEmail,
  getBiodataById,
  createBiodata,
  updateBiodata,
  deleteBiodata,
};
