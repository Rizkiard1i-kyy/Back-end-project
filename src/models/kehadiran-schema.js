const mongoose = require('mongoose');

const kehadiranSchema = new mongoose.Schema(
  {
    kodeMatkul: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      enum: ['Genap', 'Gasal'],
      required: true,
    },
    mataKuliah: {
      type: String,
      required: true,
    },
    kelas: {
      type: String,
      required: true,
    },
    jumlahPertemuan: {
      type: Number,
      required: true,
    },
    jumlahKehadiran: {
      type: Number,
      required: true,
    },
    persentase: {
      type: Number,
      required: true,
    },
    namaDosen: {
      type: String,
      required: true,
    },
  },

  { collection: 'kehadirans' }
);

module.exports = mongoose.model('Kehadiran', kehadiranSchema);
