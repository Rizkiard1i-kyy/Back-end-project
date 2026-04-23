// Di dalam suratketerangan-schema.js
const mongoose = require('mongoose');

const suratSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Sesuai dengan nama model User kamu
    required: true,
  },
  nim: String,
  nama: String,
  prodi: String,
  bahasa: String,
  jenis: String,
  tanggal: Date,
});

module.exports = mongoose.model('SuratKeterangan', suratSchema);
