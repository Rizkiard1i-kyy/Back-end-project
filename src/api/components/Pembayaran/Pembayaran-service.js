const repo = require('./Pembayaran-repository');

const createPayment = async (data) => {
  if (data.skema === 'TERMIN' && (!data.termin || data.termin.length === 0)) {
    throw new Error('Skema TERMIN harus memiliki data termin');
  }
  return await repo.createPayment(data);
};

const getAllPayments = async () => {
  return await repo.getAllPayments();
};

// search by NIM to get the _id
const getPaymentByNim = async (nim) => {
  const payment = await repo.getPaymentByNim(nim);
  if (!payment) {
    throw new Error('Data pembayaran tidak ditemukan');
  }
  return payment;
};

const getPaymentById = async (id) => {
  const payment = await repo.getPaymentById(id);
  if (!payment) {
    throw new Error('Data pembayaran tidak ditemukan');
  }
  return payment;
};

const updatePayment = async (id, data) => {
  const payment = await repo.updatePayment(id, data);
  if (!payment) {
    throw new Error('Data pembayaran tidak ditemukan');
  }
  return payment;
};

const deletePayment = async (id) => {
  const payment = await repo.deletePayment(id);
  if (!payment) {
    throw new Error('Data pembayaran tidak ditemukan');
  }
  return { message: 'Data pembayaran berhasil dihapus' };
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentByNim,
  getPaymentById,
  updatePayment,
  deletePayment,
};
