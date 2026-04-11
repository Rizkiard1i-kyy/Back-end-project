const JadwalKuliah = require('../../../models/schema/JadwalKuliah-schema');

exports.cariJadwal = async (queryDatabase) => {
    return await JadwalKuliah.find(queryDatabase);
};

exports.tambahJadwal = async (dataBaru) => {
    return await JadwalKuliah.create(dataBaru);
};