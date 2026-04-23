const express = require('express');
const router = express.Router();
const controller = require('./payment-controller');
const { requireRole } = require('../../middlewares');

// Apply authentication middleware to all routes
router.use(authentication);

// GET all payments
router.get('/', controller.getAllPayments);

// GET payment by NIM
router.get('/nim/:nim', controller.getPaymentByNim);

// GET payment by ID
router.get('/:id', controller.getPaymentById);

// POST create new payment
router.post('/', requireRole('admin'), controller.createPayment);

// PUT update payment by ID
router.put('/:id', requireRole('admin'), controller.updatePayment);

// DELETE payment by ID
router.delete('/:id', requireRole('admin'), controller.deletePayment);

module.exports = router;
