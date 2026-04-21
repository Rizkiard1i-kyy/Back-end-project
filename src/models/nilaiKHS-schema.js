module.exports = (db) =>
  db.model(
    'NilaiKHS',
    db.Schema({
      Kode_MK: String,
      Nama_Mata_Kuliah: String,
      Status: String,
      SKS: Number,
      Nilai_Huruf: String,
      Nilai_Angka: Number,
      Bobot: Number,
    })
  );
