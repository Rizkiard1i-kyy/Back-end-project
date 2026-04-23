const mongoose = require('mongoose');

const suratKeteranganSchema = new mongoose.Schema(
  {
    nim: {
      type: String,
      required: true,
      trim: true,
    },
    nama: {
      type: String,
      required: true,
      trim: true,
    },
    prodi: {
      type: String,
      required: true,
      trim: true,
    },
    bahasa: {
      type: String,
      required: true,
      enum: ['indonesia', 'inggris'], // sesuai mapping kamu
    },
    jenis: {
      type: String,
      required: true,
      enum: [
        'permohonan kerja praktik',
        'permohonan kunjungan',
        'permohonan beasiswa',
        'permohonan proposal',
        'permohonan survei',
        'permohonan visa',
      ],
    },
    tanggal: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt otomatis
  }
);

module.exports = mongoose.model('SuratKeterangan', suratKeteranganSchema);
