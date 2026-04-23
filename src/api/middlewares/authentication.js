const passport = require('passport');
const passportJWT = require('passport-jwt');

const { Users } = require('../../models');

passport.use(
  'user',
  new passportJWT.Strategy(
    {
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderWithScheme('jwt'),
      secretOrKey: 'RANDOM_STRING',
    },
    async (payload, done) => {
      const user = await Users.findOne({ email: payload.email });

      if (!user) {
        return done(null, false);
      }

      // Simpan role dari token ke object user agar bisa dipakai di middleware role
      user.tokenRole = payload.role;
      return done(null, user);
    }
  )
);

// Middleware autentikasi dasar (semua role boleh akses)
const authMiddleware = passport.authenticate('user', { session: false });

// Factory: buat middleware yang hanya mengizinkan role tertentu
function requireRole(...roles) {
  return [
    authMiddleware,
    (req, res, next) => {
      const userRole = req.user && req.user.role;
      if (!userRole || !roles.includes(userRole)) {
        return res.status(403).json({
          error: 'FORBIDDEN',
          message: `Akses ditolak. Hanya role [${roles.join(', ')}] yang diizinkan.`,
        });
      }
      return next();
    },
  ];
}

// Shortcut middleware per role
const requireMahasiswa = requireRole('mahasiswa');
const requireDosen = requireRole('dosen');
const requireAdmin = requireRole('admin');
const requireDosenOrAdmin = requireRole('dosen', 'admin');

module.exports = {
  authMiddleware,
  requireRole,
  requireMahasiswa,
  requireDosen,
  requireAdmin,
  requireDosenOrAdmin,
};
