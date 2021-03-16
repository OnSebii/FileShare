const bcrypt = require('bcrypt');

async function hashPassword(pw) {
  const hashedPassword = await bcrypt.hash(pw, 13);
  return hashedPassword;
}

async function comparePassword(pw, hashedPw) {
  return await bcrypt.compare(pw, hashedPw);
}

hashPassword('1234').then(function (res) {
  comparePassword('1234', res).then(function (res2) {
    console.log(res2);
    // if res2 == true: login User
    // else: wrong password or mail
  });
});
