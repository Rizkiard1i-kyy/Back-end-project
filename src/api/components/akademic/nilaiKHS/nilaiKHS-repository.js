const { NilaiKHS } = require('../../../models');

async function getKHS() {
  return NilaiKHS.find({});
}
async function updateKHS() {
  return HistoriNilai.find({});
}

module.exports = {
  getKHS,
  updateKHS,
};
