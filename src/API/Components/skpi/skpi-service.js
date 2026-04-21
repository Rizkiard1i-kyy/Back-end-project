const skpiRepository = require('./skpi-repository');
const tambahKegiatan = async (data) => {
  if (!data.linkBukti || !data.linkBukti.includes('drive.google.com')) {
    throw new Error('Link Google Drive wajib diisi dan valid!');
  }

  const inputPeran = data.klasifikasi
    ? data.klasifikasi.toLowerCase().trim()
    : '';

  if (inputPeran === 'peserta') {
    data.klasifikasi = 'Peserta';
  } else if (inputPeran === 'panitia') {
    data.klasifikasi = 'Panitia';
  } else if (inputPeran === 'bphi') {
    data.klasifikasi = 'BPHI';
  } else {
    throw new Error(
      'Klasifikasi tidak valid! Harap pilih: Peserta, Panitia, atau Ketua Pelaksana.'
    );
  }

  const standarPoin = {
    Peserta: 15,
    Panitia: 25,
    BPHI: 50,
  };

  data.poin = standarPoin[data.klasifikasi];
  return await skpiRepository.create(data);
};

const dapatkanSemuaKegiatan = async () => {
  return await skpiRepository.findAll();
};

const hapusKegiatan = async (id) => {
  const skpi = await skpiRepository.findById(id);
  if (!skpi) {
    throw new Error('Data kegiatan tidak ditemukan');
  }
  return await skpiRepository.deleteById(id);
};

module.exports = {
  tambahKegiatan,
  dapatkanSemuaKegiatan,
  hapusKegiatan,
};
