const rpsService = require('./RPS-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

exports.getAllRPS = async (req, res, next) => {
    try {
        const data = await rpsService.ambilDaftarRPS();
        
        return res.status(200).json({
            status: "success",
            message: "Daftar RPS berhasil diambil",
            data: data
        });
    } catch (error) {
        return next(error);
    }
};

exports.postRPS = async (req, res, next) => {
    try {
        const dataBaru = req.body;
        if (!dataBaru || Object.keys(dataBaru).length === 0) {
            throw errorResponder(
                errorTypes.EMPTY_BODY, 
                'Data RPS tidak boleh kosong!'
            );
        }

        const result = await rpsService.simpanRPS(dataBaru);
        
        return res.status(201).json({
            status: "success",
            message: "Data RPS berhasil ditambahkan",
            data: result
        });
    } catch (error) {
        if (error.code === 11000) {
            return next(errorResponder(
                errorTypes.DB_DUPLICATE_CONFLICT, 
                'Gagal: Kode Mata Kuliah tersebut sudah terdaftar di database!'
            ));
        }
        if (error.message.includes('Google Drive')) {
            return next(errorResponder(
                errorTypes.VALIDATION, 
                error.message
            ));
        }
        return next(error);
    }
};