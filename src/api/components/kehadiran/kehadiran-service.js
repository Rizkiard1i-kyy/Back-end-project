const kehadiranRepository = require('./kehadiran-repository');
const authRepository = require('../auth/auth-repository');

async function getKehadiran(semester) {
  let queryDatabase = {};

  if (semester) {
    semester =
      semester.charAt(0).toUpperCase() + semester.slice(1).toLowerCase();
    queryDatabase.semester = semester;
  }

  return await kehadiranRepository.getKehadiran(queryDatabase);
}

async function postKehadiran(newKehadiran) {
  if (!newKehadiran.mataKuliah) {
    throw new Error('Nama mata kuliah wajib diisi!');
  }

  const userExists = await authRepository.getUserByEmail(
    newKehadiran.emailMahasiswa
  );

  if (!userExists) {
    throw new Error('Email mahasiswa tidak ditemukan dalam database');
  }

  return await kehadiranRepository.postKehadiran(newKehadiran);
}
async function updateKehadiran(kodeMatkul, emailMahasiswa, updateData) {
  const { jumlahPertemuan, jumlahKehadiran, persentase } = updateData;

  const dataTerfilter = {
    jumlahPertemuan: updateData.jumlahPertemuan,
    jumlahKehadiran: updateData.jumlahKehadiran,
    persentase: updateData.persentase,
  };

  return await kehadiranRepository.updateKehadiran(
    kodeMatkul,
    emailMahasiswa,
    dataTerfilter
  );
}

async function getKehadiranSaya(email, semester) {
  let queryDatabase = { emailMahasiswa: email };

  if (semester) {
    semester =
      semester.charAt(0).toUpperCase() + semester.slice(1).toLowerCase();
    queryDatabase.semester = semester;
  }

  return await kehadiranRepository.getKehadiran(queryDatabase);
}

module.exports = {
  getKehadiran,
  postKehadiran,
  updateKehadiran,
  getKehadiranSaya,
};
