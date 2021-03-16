const fs = require('fs-extra');
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

const time = 3600 * 24 * 7;
console.log(time);
setInterval(function () {
  const dir = path.join(__dirname, 'anonym');
  fs.emptyDirSync(dir);
}, time);

console.log('2');

function getFiles(username) {}

function getFile(username) {}
