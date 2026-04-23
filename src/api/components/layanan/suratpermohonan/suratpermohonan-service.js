const repository = require('./suratpermohonan-repository');
const usersService = require('../../users/users-service');
const { errorResponder, errorTypes } = require('../../../../core/errors');

const bahasaMap = {
  1: 'Indonesia',
  2: 'Inggris',
};

const jenisMap = {
  1: 'Permohonan Kerja Praktik',
  2: 'Permohonan Kunjungan',
  3: 'Permohonan Pengajuan Beasiswa',
  4: 'Permohonan Pengajuan Proposal',
  5: 'Permohonan Survei atau Riset',
  6: 'Permohonan Visa',
};

/**
 * CREATE SURAT PERMOHONAN
 */
const createsuratpermohonan = async (data) => {
  if (!data.userId) {
    throw errorResponder(errorTypes.UNAUTHORIZED, 'User tidak terautentikasi');
  }

  const user = await usersService.getUser(data.userId);

  if (!user) {
    throw errorResponder(
      errorTypes.UNPROCESSABLE_ENTITY,
      'User tidak ditemukan'
    );
  }

  const { nim, nama, prodi, bahasa, jenis } = data;

  if (!nim || !nama || !prodi || !bahasa || !jenis) {
    throw errorResponder(errorTypes.BAD_REQUEST, 'Semua field wajib diisi');
  }

  const bahasaResult = bahasaMap[bahasa];
  const jenisResult = jenisMap[jenis];

  if (!bahasaResult) {
    throw errorResponder(errorTypes.BAD_REQUEST, 'Bahasa tidak valid');
  }

  if (!jenisResult) {
    throw errorResponder(errorTypes.BAD_REQUEST, 'Jenis tidak valid');
  }

  const surat = {
    userId: user.id || user._id,
    nim,
    nama,
    prodi,
    bahasa: bahasaResult,
    jenis: jenisResult,
    createdAt: new Date(),
  };

  return await repository.save(surat);
};

/**
 * GET ALL SURAT PERMOHONAN
 */
const getallsuratpermohonan = async (user) => {
  if (!user) throw new Error('User tidak ditemukan');

  const role = user.role || user.tokenRole;

  if (role === 'dosen') {
    return repository.findAll();
  }

  if (role === 'mahasiswa') {
    return repository.findByNim(user.nim);
  }

  throw new Error('Akses ditolak');
};

module.exports = {
  createsuratpermohonan,
  getallsuratpermohonan,
};
