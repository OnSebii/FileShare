const bcrypt = require('bcrypt');

async function hashPassword(pw) {
  const hashedPassword = await bcrypt.hash(pw, 10);
  return hashedPassword;
}

async function comparePassword(pw, hashedPw) {
  return await bcrypt.compare(pw, hashedPw);
}

hashPassword('1').then(function (res) {
  console.log(res);
  comparePassword('123', res).then(function (res2) {
    console.log(res2);
    // if res2 == true: login User
    // else: wrong password or mail
  });
});
