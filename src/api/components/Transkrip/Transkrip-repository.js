const Transkrip = require('../../../Transkrip-model');

async function getTranskrip(queryDatabase) {
  return await Transkrip.find(queryDatabase)
    .select('-_id -__v')
    .sort({ nim: 1 });
}
async function postTranskrip(dataBaru) {
  return Transkrip.create(dataBaru);
}

module.exports = {
  getTranskrip,
  postTranskrip,
};
