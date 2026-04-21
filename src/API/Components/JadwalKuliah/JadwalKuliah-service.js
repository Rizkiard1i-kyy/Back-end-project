const jadwalRepo = require('./JadwalKuliah-repository');

async function ambilJadwal(filterSemester) {
    let queryDatabase = {};
    
    if (filterSemester) {
        // Otomatis merapikan inputan dari URL: "genap" -> "Genap"
        const semesterRapi = filterSemester.charAt(0).toUpperCase() + filterSemester.slice(1).toLowerCase();
        queryDatabase.semester = semesterRapi; 
    }

    return await jadwalRepo.cariJadwal(queryDatabase);
}

async function buatJadwalBaru(dataDariController) {
    if (!dataDariController.mataKuliah) {
        throw new Error("Nama mata kuliah wajib diisi!");
    }
    return await jadwalRepo.tambahJadwal(dataDariController);
}

module.exports = {
    ambilJadwal,
    buatJadwalBaru,
};