const mongoose = require('mongoose'); // Import mongoose di sini saja

const schema = new mongoose.Schema({
  NIM: String,
  NO: Number,
  TahunAkademik: Number,
  Kode: String,
  MataKuliah: String,
  SKS: Number,
  NilaiBobot: Number,
});

// Export MODEL yang sudah jadi, bukan fungsi lagi
module.exports = mongoose.model('historiNilai', schema);