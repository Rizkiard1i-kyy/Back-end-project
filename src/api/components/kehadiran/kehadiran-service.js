const kehadiranRepository = require('./kehadiran-repository');

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
  return await kehadiranRepository.addKehadiran(newKehadiran);
}
/*async function updateKehadiran() {
  return kehadiranRepository.updateKehadiran;
} */

module.exports = {
  getKehadiran,
  postKehadiran,
  //updateKehadiran,
};
