const JadwalKuliah = require('../../../../models/JadwalKuliah-schema');

async function cariJadwal(queryDatabase) {
  return await JadwalKuliah.find(queryDatabase);
}

async function tambahJadwal(dataBaru) {
  return await JadwalKuliah.create(dataBaru);
}

module.exports = {
  cariJadwal,
  tambahJadwal,
};
