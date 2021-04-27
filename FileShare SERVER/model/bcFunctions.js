const bcrypt = require('bcrypt');

async function hashPassword(pw) {
  const hashedPassword = await bcrypt.hash(pw, 13);
  return hashedPassword;
}

async function comparePassword(pw, hashedPw) {
  const compare = await bcrypt.compare(pw, hashedPw);
  return compare;
}

module.exports = { hashPassword, comparePassword };
