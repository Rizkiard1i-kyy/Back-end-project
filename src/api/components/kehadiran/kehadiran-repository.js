const { Kehadiran } = require('../../../models');

async function getKehadiran(queryDatabase) {
  return Kehadiran.find(queryDatabase);
}
async function postKehadiran(dataBaru) {
  return Kehadiran.create(dataBaru);
}
async function updateKehadiran() {
  return Kehadiran.find({});
}

module.exports = {
  getKehadiran,
  postKehadiran,
  updateKehadiran,
};
