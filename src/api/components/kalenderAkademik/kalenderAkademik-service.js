const kalenderAkademikRepository = require('./kalenderAkademik-repository');

async function getKalender(semester) {
  let queryDatabase = {};

  if (semester) {
    semester =
      semester.charAt(0).toUpperCase() + semester.slice(1).toLowerCase();
    queryDatabase.semester = semester;
  }

  return await kalenderAkademikRepository.getKalender(queryDatabase);
}

async function postKalender(newKalender) {
  if (!newKalender.keterangan) {
    throw new Error('Keterangan kegiatan yang dilakukan harus diisi!');
  }
  return await kalenderAkademikRepository.postKalender(newKalender);
}

module.exports = {
  getKalender,
  postKalender,
};
