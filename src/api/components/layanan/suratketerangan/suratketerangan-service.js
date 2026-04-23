const repository = require('./suratketerangan-repository');

// mapping bahasa
const bahasamap = {
  1: 'indonesia',
  2: 'inggris',
};

// mapping jenis
const jenismap = {
  1: 'permohonan kerja praktik',
  2: 'permohonan kunjungan',
  3: 'permohonan beasiswa',
  4: 'permohonan proposal',
  5: 'permohonan survei',
  6: 'permohonan visa',
};

const createsuratketerangan = async (data) => {
  try {
    console.log('SERVICE INPUT:', data);

    // ❗ VALIDASI WAJIB
    if (!data.nim || !data.nama || !data.prodi || !data.bahasa || !data.jenis) {
      throw new Error('Semua data wajib diisi');
    }

    // ❗ VALIDASI MAPPING
    const bahasa = bahasamap[data.bahasa];
    const jenis = jenismap[data.jenis];

    if (!bahasa) {
      throw new Error('bahasa tidak valid');
    }

    if (!jenis) {
      throw new Error('jenis tidak valid');
    }

    //  BUILD DATA
    const surat = {
      nim: data.nim,
      nama: data.nama,
      prodi: data.prodi,
      bahasa: bahasa,
      jenis: jenis,
      tanggal: new Date().toISOString(),
    };

    console.log('SURAT READY:', surat);

    //  SAVE KE REPOSITORY
    const result = await repository.save(surat);

    return result;
  } catch (error) {
    console.error('SERVICE ERROR:', error.message);
    throw error;
  }
};

const getallsuratketerangan = async () => {
  try {
    return await repository.findall();
  } catch (error) {
    console.error('SERVICE GETALL ERROR:', error.message);
    throw error;
  }
};

module.exports = {
  createsuratketerangan,
  getallsuratketerangan,
};
//test
