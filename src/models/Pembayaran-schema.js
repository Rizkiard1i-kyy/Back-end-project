const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
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
    skema: {
      type: String,
      enum: ['FULL', 'TERMIN'],
      required: true,
    },
    noVA: {
      type: String,
      required: true,
    },
    totalTagihan: {
      type: Number,
      required: true,
    },
    termin: [
      {
        nomorTermin: Number,
        noVA: String,
        jumlah: Number,
        tanggalMulai: Date,
        tanggalAkhir: Date,
        status: {
          type: String,
          enum: ['BELUM_BAYAR', 'LUNAS'],
          default: 'BELUM_BAYAR',
        },
      },
    ],
    tanggalMulai: {
      type: Date,
      required: true,
    },
    tanggalAkhir: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['BELUM_BAYAR', 'LUNAS'],
      default: 'BELUM_BAYAR',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Payment', paymentSchema);
