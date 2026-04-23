const transkripRepository = require('./Transkrip-repository');

async function getTranskrip(nim) {
  let queryDatabase = {};
  if (nim) {
    queryDatabase.nim = nim;
  }
  return await transkripRepository.getTranskrip(queryDatabase);
}

async function postTranskrip(newTranskrip) {
  if (!newTranskrip.nim) {
    throw new Error('NIM wajib diisi!');
  }

  const userExists = await transkripRepository.getTranskrip({
    nim: newTranskrip.nim,
  });
  if (userExists.length > 0) {
    throw new Error('NIM sudah terdaftar dalam database');
  }
  return await transkripRepository.postTranskrip(newTranskrip);
}

module.exports = {
  getTranskrip,
  postTranskrip,
};
