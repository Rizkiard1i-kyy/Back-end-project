const Kehadiran = require('../../../models/kehadiran-schema');

async function getKehadiran(queryDatabase) {
  return Kehadiran.find(queryDatabase).select('-_id -__v');
}
async function postKehadiran(dataBaru) {
  return await Kehadiran.create(dataBaru);
}
async function updateKehadiran(kodeMatkul, dataUpdate) {
  return await Kehadiran.findOneAndUpdate(
    { kodeMatkul: kodeMatkul },
    { $set: dataUpdate },
    { new: true }
  );
}

module.exports = {
  getKehadiran,
  postKehadiran,
  updateKehadiran,
};
