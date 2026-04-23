const service = require('./payment-service');

const createPayment = async (req, res) => {
  try {
    const payment = await service.createPayment(req.body);
    res.status(201).json({ success: true, data: payment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllPayments = async (req, res) => {
  try {
    const payments = await service.getAllPayments();
    res.status(200).json({ success: true, data: payments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getPaymentByNim = async (req, res) => {
  try {
    const payment = await service.getPaymentByNim(req.params.nim);
    res.status(200).json({ success: true, data: payment });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const payment = await service.getPaymentById(req.params.id);
    res.status(200).json({ success: true, data: payment });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const updatePayment = async (req, res) => {
  try {
    const payment = await service.updatePayment(req.params.id, req.body);
    res.status(200).json({ success: true, data: payment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deletePayment = async (req, res) => {
  try {
    const result = await service.deletePayment(req.params.id);
    res.status(200).json({ success: true, ...result });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentByNim,
  getPaymentById,
  updatePayment,
  deletePayment,
};
