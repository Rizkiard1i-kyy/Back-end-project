const jwt = require('jsonwebtoken');
const authRepository = require('./auth-repository');
const { passwordMatched } = require('../../../utils/password');

function generateToken(email, role) {
  const secretKey = 'RANDOM_STRING';
  const payload = {
    email,
    role,
    timestamp: Date.now(),
  };
  return jwt.sign(payload, secretKey, { expiresIn: '1d' });
}

async function checkLogin(email, password) {
  const user = await authRepository.getUserByEmail(email);

  const userPass = user ? user.password : '<RANDOM>';
  const loginPassed = await passwordMatched(password, userPass);

  if (user && loginPassed) {
    return {
      email: user.email,
      role: user.role,
      token: generateToken(email, user.role),
    };
  }

  return null;
}

module.exports = { checkLogin };
