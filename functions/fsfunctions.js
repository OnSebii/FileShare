const fs = require('fs');
const path = require('path');

function writeFile(email, file) {
  const dir = path.join(__dirname, email);
  try {
    if (fs.existsSync(dir) == false) fs.mkdirSync(dir);
  } catch (err) {
    console.log(err);
  }
}

const time = 1000 * 3600 * 24 * 7;
setInterval(function () {
  console.log('1');
}, time);
console.log(time);

console.log('2');

function getFiles(username) {}

function getFile(username) {}

// writeFile('lang.s03@htlwienwest.at');
