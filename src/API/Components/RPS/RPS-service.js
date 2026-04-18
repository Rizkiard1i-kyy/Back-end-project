const rpsRepo = require('./RPS-repository');
async function ambilDaftarRPS() {
    return await rpsRepo.cariSemuaRPS();
}

async function simpanRPS(dataRPS) {
    if (dataRPS.linkMateri && !dataRPS.linkMateri.includes('drive.google.com')) {
        throw new Error("Materi harus disimpan dari google drive");
    }
    return await rpsRepo.tambahRPSBaru(dataRPS);
}
module.exports = {
    ambilDaftarRPS,
    simpanRPS,
};