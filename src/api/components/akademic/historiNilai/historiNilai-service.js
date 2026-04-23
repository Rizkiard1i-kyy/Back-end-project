const historiNilaiRepository = require('./historiNilai-repository');

async function getHistori(NIM) {
  return historiNilaiRepository.getHistori(NIM);
}

async function postHistori(data) {
  const { NIM, NO, TahunAkademik, Kode, MataKuliah, SKS, NilaiBobot } = data;
  return historiNilaiRepository.postHistori({
    NIM, 
    NO, 
    TahunAkademik,
    Kode,
    MataKuliah,
    SKS,
    NilaiBobot,
  });
}

async function updateHistori(NIM, Kode, SKS, NilaiBobot) {
  return historiNilaiRepository.updateHistori(NIM, Kode, SKS, NilaiBobot);
}

async function deleteHistori(NIM, Kode) {
  return historiNilaiRepository.deleteHistori(NIM, Kode);
}

module.exports = {
  getHistori,
  postHistori,
  updateHistori,
  deleteHistori,
};