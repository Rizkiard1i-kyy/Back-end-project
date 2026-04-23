const Surat = require('../../../../models/suratketerangan-schema');

const save = async (data) => {
  return await Surat.create(data);
};

const findAll = async () => {
  return await Surat.find();
};

const findByUserId = async (userId) => {
  return await Surat.find({ userId });
};

module.exports = {
  save,
  findAll,
  findByUserId,
};
