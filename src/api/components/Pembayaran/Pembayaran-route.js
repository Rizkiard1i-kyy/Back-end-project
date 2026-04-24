const express = require('express');
const router = express.Router();
const controller = require('./Pembayaran-controller');
const { authMiddleware, requireRole } = require('../../middlewares');

router.use(authMiddleware);

// GET all payments
router.get('/', controller.getAllPayments);

// GET by NIM — useful to find the _id first
router.get('/nim/:nim', controller.getPaymentByNim);

// GET by _id
router.get('/:id', controller.getPaymentById);

// POST create — admin only
router.post('/', requireRole('admin'), controller.createPayment);

// PUT update by _id — admin only
router.put('/:id', requireRole('admin'), controller.updatePayment);

// DELETE by _id — admin only
router.delete('/:id', requireRole('admin'), controller.deletePayment);

module.exports = router;
