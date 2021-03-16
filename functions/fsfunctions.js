const fs = require('fs');
const path = require('path');

//TODO Console.error durch error function ersetzen

function writeFile(email, file) {
  const dir = path.join(__dirname, email);
  try {
    if (fs.existsSync(dir) == false) fs.mkdirSync(dir);
  } catch (err) {
    console.log(err);
  }
}

function writeFileAnonym(file) {
  const dir = path.join(__dirname, 'anonym');
  try {
    if (fs.existsSync(dir) == false) fs.mkdirSync(dir);
    //TODO File speichern
  } catch (err) {
    console.error(err);
  }
}

function getFile(email, fileName) {
  const dir = path.join(__dirname, email);
  try {
    if (fs.existsSync(dir) == false) {
      return { code: 404, message: 'Files from mail not found' };
    }
    return {
      code: 200,
      message: 'Files',
    };
  } catch (err) {
    console.error(err);
  }
}

const time = 1000 * 3600 * 24 * 7;
setInterval(function () {
  console.log('1');
}, time);

console.log('2');

function getFiles(username) {}

function getFile(username) {}

// writeFile('lang.s03@htlwienwest.at');
