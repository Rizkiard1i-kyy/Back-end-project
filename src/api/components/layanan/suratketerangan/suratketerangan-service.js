const repository = require('./suratketerangan-repository');
const usersService = require('../../users/users-service');
const { errorResponder, errorTypes } = require('../../../../core/errors');

/**
 * Mapping Bahasa
 */
const bahasaMap = {
  1: 'Indonesia',
  2: 'Inggris',
};

/**
 * Mapping Jenis Surat
 */
const jenisMap = {
  1: 'Permohonan Kerja Praktik',
  2: 'Permohonan Kunjungan',
  3: 'Permohonan Beasiswa',
  4: 'Permohonan Proposal',
  5: 'Permohonan Survei',
  6: 'Permohonan Visa',
};

/**
 * CREATE SURAT KETERANGAN
 */
const createsuratketerangan = async (data) => {
  // ===============================
  // 1. VALIDASI USER ID
  // ===============================
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

  // ===============================
  // 2. VALIDASI INPUT
  // ===============================
  const { nim, nama, prodi, bahasa, jenis } = data;

  if (!nim || !nama || !prodi || !bahasa || !jenis) {
    throw errorResponder(errorTypes.BAD_REQUEST, 'Semua field wajib diisi');
  }

  // ===============================
  // 3. VALIDASI ENUM
  // ===============================
  const bahasaResult = bahasaMap[bahasa];
  const jenisResult = jenisMap[jenis];

  if (!bahasaResult) {
    throw errorResponder(errorTypes.BAD_REQUEST, 'Bahasa tidak valid');
  }

  if (!jenisResult) {
    throw errorResponder(errorTypes.BAD_REQUEST, 'Jenis surat tidak valid');
  }

  // ===============================
  // 4. BUILD DATA FINAL
  // ===============================
  const surat = {
    userId: user.id || user._id,
    nim,
    nama,
    prodi,
    bahasa: bahasaResult,
    jenis: jenisResult,
    createdAt: new Date(),
  };

  // ===============================
  // 5. SAVE KE DATABASE
  // ===============================
  return await repository.save(surat);
};

/**
 * GET ALL SURAT KETERANGAN
 */
const getallsuratketerangan = async (user) => {
  if (!user) {
    throw errorResponder(errorTypes.UNAUTHORIZED, 'Unauthorized');
  }

  const role = user.role || user.tokenRole;

  if (role === 'dosen' || role === 'admin') {
    return await repository.findAll();
  }

  if (role === 'mahasiswa') {
    return await repository.findByUserId(user.id || user._id);
  }

  throw errorResponder(errorTypes.FORBIDDEN, 'Akses ditolak');
};

module.exports = {
  createsuratketerangan,
  getallsuratketerangan,
};
