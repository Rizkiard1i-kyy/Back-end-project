const transkripRepository = require('./Transkrip-repository');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getTranskrip(nim) {
  let queryDatabase = {};
  if (nim) {
    queryDatabase.nim = nim;
  }
  return await transkripRepository.getTranskrip(queryDatabase);
}

async function postTranskrip(newTranskrip) {
  if (!newTranskrip.nim) {
    throw errorResponder(errorTypes.VALIDATION, 'NIM wajib diisi!');
  }

  const userExists = await transkripRepository.getTranskrip({
    nim: newTranskrip.nim,
  });
  if (userExists.length > 0) {
    throw errorResponder(
      errorTypes.VALIDATION,
      'NIM sudah terdaftar dalam database'
    );
  }

  return await transkripRepository.postTranskrip(newTranskrip);
}

module.exports = {
  getTranskrip,
  postTranskrip,
};
