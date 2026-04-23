const historiNilai = require('../../../../models/historiNilai-schema');

async function getHistori(NIM) {
  return historiNilai.find({NIM: NIM});
}

async function postHistori(data) {
  return historiNilai.create(data);
}

async function updateHistori(NIM, Kode, SKS, NilaiBobot) {
  return historiNilai.updateOne(
    { NIM: NIM, Kode: Kode },
    { 
      $set: { 
        SKS: SKS, 
        NilaiBobot: NilaiBobot,
      } 
    }
  );
}

async function deleteHistori(NIM, Kode) {
  return historiNilai.deleteOne({ NIM: NIM, Kode: Kode });
}

module.exports = {
  getHistori,
  postHistori,
  updateHistori,
  deleteHistori,
};
