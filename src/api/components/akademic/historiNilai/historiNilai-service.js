const { useImperativeHandle } = require('react');
const historiNilaiRepository = require('./historiNilai-repository');

async function getHistori() {
  return historiNilaiRepository.getHistori();
}
async function updateHistori() {
  return historiNilaiRepository.updateHistori;
}

module.exports = {
  getHistori,
  updateHistori,
};