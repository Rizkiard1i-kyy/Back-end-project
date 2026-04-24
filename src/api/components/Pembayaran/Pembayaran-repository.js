// FIX: import path now matches the actual schema file name
const Payment = require('../../../models/Pembayaran-schema');

const createPayment = async (data) => {
  return await Payment.create(data);
};

const getAllPayments = async () => {
  return await Payment.find();
};

// search by NIM (for finding _id)
const getPaymentByNim = async (nim) => {
  return await Payment.findOne({ nim });
};

const getPaymentById = async (id) => {
  return await Payment.findById(id);
};

const updatePayment = async (id, data) => {
  return await Payment.findByIdAndUpdate(id, data, { new: true });
};

const deletePayment = async (id) => {
  return await Payment.findByIdAndDelete(id);
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentByNim,
  getPaymentById,
  updatePayment,
  deletePayment,
};
