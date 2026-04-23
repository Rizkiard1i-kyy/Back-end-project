const Surat = require('../../../../models/suratpermohonan-schema');

const save = async (data) => {
  return await Surat.create(data);
};

const findAll = async () => {
  return await Surat.find();
};

const findByNim = async (nim) => {
  return await Surat.find({ nim });
};

module.exports = {
  save,
  findAll,
  findByNim,
};
