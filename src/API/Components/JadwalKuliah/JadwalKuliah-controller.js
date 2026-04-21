const jadwalService = require('./JadwalKuliah-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getJadwal(req, res, next) {
    try {      
        const filterSemester = req.query.semester; 
        const jadwal = await jadwalService.ambilJadwal(filterSemester);
        
        return res.status(200).json({ 
            status: "success", 
            message: "Data jadwal berhasil diambil",
            data: jadwal 
        });
    } catch (error) {
        return next(error);
    }
}

async function postJadwal(req, res, next) {
    try {
        const dataBaru = req.body;
        if (!dataBaru || Object.keys(dataBaru).length === 0) {
            throw errorResponder(
                errorTypes.EMPTY_BODY, 
                'Data Jadwal Kuliah tidak boleh kosong!'
            );
        }

        const jadwalBaru = await jadwalService.buatJadwalBaru(dataBaru);
        
        return res.status(201).json({ 
            status: "success", 
            message: "Data jadwal berhasil ditambahkan",
            data: jadwalBaru 
        });
    } catch (error) {
        if (error.code === 11000) {
            return next(errorResponder(
                errorTypes.DB_DUPLICATE_CONFLICT, 
                'Gagal: Kode Mata Kuliah atau Kode Teams duplikat'
            ));
        }
        if (error.message.includes('wajib diisi')) {
             return next(errorResponder(
                errorTypes.VALIDATION, 
                error.message
            ));
        }
        return next(error);
    }
}

module.exports = {
    getJadwal,
    postJadwal,
};

