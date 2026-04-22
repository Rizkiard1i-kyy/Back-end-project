const mongoose = require('mongoose');

const kalenderAkademikSchema = new mongoose.Schema(
  {
    no: {
      type: Number,
      required: true,
      unique: true,
    },
    semester: {
      type: String,
      enum: ['Genap', 'Gasal'],
      required: true,
    },
    tanggal: {
      type: String,
      required: true,
    },
    keterangan: {
      type: String,
      required: true,
    },
  },

  { collection: 'kalenderakademiks' }
);

module.exports = mongoose.model('Kalender Akademik', kalenderAkademikSchema);
