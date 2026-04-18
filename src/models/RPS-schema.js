const mongoose = require('mongoose');


const rpsSchema = new mongoose.Schema ({
    fakultas: {
        type: String,
        required: true
    },
    jurusan: {
        type: String,
        required: true
    },
    kodeMatkul: { 
        type: String, 
        unique: true 
    },
    mataKuliah: {
        type: String,
        required: true
    },
    sks: {
        type: Number,
        required: true
    },
    linkMateri: {
        type: String,
        required: true
    },


})