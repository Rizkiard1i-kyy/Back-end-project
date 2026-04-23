const KalenderAkademik = require('../../../models/kalenderAkademik-schema');

async function getKalender(queryDatabase) {
  return await KalenderAkademik.find(queryDatabase)
    .select('-_id -__v')
    .sort({ no: 1 });
}
async function postKalender(dataBaru) {
  return KalenderAkademik.create(dataBaru);
}

module.exports = {
  getKalender,
  postKalender,
};
