const express = require('express');
const router = express.Router();
const controller = require('./Pembayaran-controller');
const { authMiddleware, requireRole } = require('../../middlewares');

router.use(authMiddleware);

// GET all payments — any authenticated user
router.get('/', controller.getAllPayments);

// GET payment by NIM — any authenticated user
router.get('/nim/:nim', controller.getPaymentByNim);

// GET payment by ID — any authenticated user
router.get('/:id', controller.getPaymentById);

// POST create new payment — admin only
router.post('/', requireRole('admin'), controller.createPayment);

// PUT update payment by ID — admin only
router.put('/:id', requireRole('admin'), controller.updatePayment);

// DELETE payment by ID — admin only
router.delete('/:id', requireRole('admin'), controller.deletePayment);

module.exports = router;
