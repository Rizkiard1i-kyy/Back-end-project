const nilaiKHSRepository = require('./nilaiKHS-repository');

async function getKHS() {
  return nilaiKHSRepository.getKHS();
}

async function updateKHS() {
  return nilaiKHSRepository.updateKHS;
}

module.exports = {
  getKHS,
  updateKHS,
};