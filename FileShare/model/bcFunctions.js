const bcrypt = require('bcrypt');

async function hashPassword(pw) {
  const hashedPassword = await bcrypt.hash(pw, 13);
  return hashedPassword;
}

async function comparePassword(pw, hashedPw) {
  return await bcrypt.compare(pw, hashedPw);
}

module.exports = { hashPassword, comparePassword };
