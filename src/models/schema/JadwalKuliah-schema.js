const mongoose = require('mongoose');

const jadwalKuliahSchema = new mongoose.Schema({
    kodeMatkul: { type: String, required: true }, 
    mataKuliah: { type: String, required: true }, 
    sks: { type: Number, required: true },
    kelas: { type: String, required: true },
    dosenPengajar: { type: String, required: true },
    ruangWaktu: { type: String, required: true }, 
    kodeJoinTeams: { type: String, required: true },
    semester: { type: String, enum: ['Genap', 'Gasal'], required: true },
    tahun: { type: String, required: true },
    emailDosen: 
    { type: String, match:[/@fti\.untar\.ac\.id$/, 'Wajib pake email untar'], 
        required: true},
});

module.exports = mongoose.model('JadwalKuliah', jadwalKuliahSchema);