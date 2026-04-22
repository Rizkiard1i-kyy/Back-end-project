const { HistoriNilai } = require('../../../models');

async function getHistori() {
  return HistoriNilai.find({});
}
async function updateHistori() {
  return HistoriNilai.find({});
}

module.exports = {
  getHistori,
  updateHistori,
};
