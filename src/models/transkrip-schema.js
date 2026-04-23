const mongoose = require('mongoose');

const transkripSchema = new mongoose.Schema(
  {
    nim: {
      type: String,
      required: true,
      unique: true,
    },
    nama: {
      type: String,
      required: true,
    },
    jurusan: {
      type: String,
      required: true,
    },
    daftar_nilai: {
      kode: String,
      mata_kuliah: String,
      sks: Number,
      nilai: String,
      bobot: Number,
      mutu: Number,
    },
  },
  { timestamps: true },
  { collection: 'transkrips' }
);
module.exports = mongoose.model('Transkrip', transkripSchema);
