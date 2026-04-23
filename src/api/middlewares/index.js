const {
  authMiddleware,
  requireRole,
  requireMahasiswa,
  requireDosen,
  requireAdmin,
  requireDosenOrAdmin,
} = require('./authentication');

module.exports = {
  authMiddleware,
  requireRole,
  requireMahasiswa,
  requireDosen,
  requireAdmin,
  requireDosenOrAdmin,
};
