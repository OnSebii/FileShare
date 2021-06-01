const path = require('path');
const fs = require('fs');

function getFileAnon(name) {
  //   const dir = path.join(__dirname, '../upload/anon/', name);
  const dir = path.join(__dirname, '../public/upload/anon/', name);
  const file = fs.readFileSync(dir);
  //   TODO checken ob das File da ist
  return dir;
}

module.exports = { getFileAnon };
