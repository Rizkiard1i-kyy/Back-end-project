const RPS = require('../../../models/RPS-schema');

exports.cariSemuaRPS = async () => {
    return await RPS.find();
};

exports.tambahRPSBaru = async (dataBaru) => {
    return await RPS.create(dataBaru);
};