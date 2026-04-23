const mongoose = require('mongoose');

const suratPermohonanSchema = new mongoose.Schema(
  {
    nim: {
      type: String,
      required: true,
    },
    nama: {
      type: String,
      required: true,
    },
    prodi: {
      type: String,
      required: true,
    },
    bahasa: {
      type: String,
      required: true,
      enum: ['Indonesia', 'Inggris'],
    },
    jenis: {
      type: String,
      required: true,
      enum: [
        'Permohonan Kerja Praktik',
        'Permohonan Kunjungan',
        'Permohonan Pengajuan Beasiswa',
        'Permohonan Pengajuan Proposal',
        'Permohonan Survei atau Riset',
        'Permohonan Visa',
      ],
    },
    tanggal: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SuratPermohonan', suratPermohonanSchema);
