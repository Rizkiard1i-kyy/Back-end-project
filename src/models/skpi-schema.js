const mongoose = require('mongoose');

const skpiSchema = new mongoose.Schema({
    namaKegiatan: {
        type: String,
        required: true
    },
    jenisKegiatan: {
        type: String,
        required: true
    },
    klasifikasi: {
        type: String,
        required: true,
        enum: ['Peserta', 'Panitia', 'BPHI'] 
    },
    tanggalInput: {
        type: Date,
        default: Date.now
    },
    linkBukti: {
        type: String,
        required: true
    },
    statusValidasi: {
        type: String,
        enum: ['Belum', 'Sudah', 'Ditolak'],
        default: 'Belum'
    },
    poin: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Skpi', skpiSchema);