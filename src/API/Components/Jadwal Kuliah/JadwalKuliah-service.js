const jadwalRepo = require('./JadwalKuliah-repository');

exports.ambilJadwal = async (filterSemester) => {
    let queryDatabase = {};
    if (filterSemester) {
        queryDatabase.semester = filterSemester; 
    }

    return await jadwalRepo.cariJadwal(queryDatabase);
};

exports.buatJadwalBaru = async (dataDariController) => {
    return await jadwalRepo.tambahJadwal(dataDariController);
};
