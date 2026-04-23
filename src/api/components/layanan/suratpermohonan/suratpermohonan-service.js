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

const createsuratpermohonan = async (data) => {
  if (!data.nim || !data.nama || !data.prodi || !data.bahasa || !data.jenis) {
    throw new Error('Semua data wajib diisi');
  }
  const bahasa = bahasaMap[data.bahasa];
  const jenis = jenisMap[data.jenis];
  if (!bahasa) throw new Error('Bahasa tidak valid');
  if (!jenis) throw new Error('Jenis tidak valid');
  const surat = {
    nim: data.nim,
    nama: data.nama,
    prodi: data.prodi,
    bahasa,
    jenis,
    tanggal: new Date(),
  };
  return await repository.save(surat);
};

const getallsurat = async (user) => {
  if (user.role === 'dosen') return await repository.findAll();
  if (user.role === 'mahasiswa') return await repository.findByNim(user.nim);
  throw new Error('Akses ditolak');
};

module.exports = {
  createsuratpermohonan,
  getallsurat,
};
