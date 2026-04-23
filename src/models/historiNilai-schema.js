module.exports = (db) =>
  db.model(
    'HistoriNilai',
    db.Schema({
      NO:Number,
      TahunAkademi: Number,
      Kode: String,
      MataKuliah: String,
      SKS: Number,
      NilaiBobot: Number,
    })
  );
