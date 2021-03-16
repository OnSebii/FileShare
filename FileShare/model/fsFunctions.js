const fs = require('fs-extra');
const path = require('path');

function writeFile(email, file) {
  const dir = path.join(__dirname, email);
  try {
    if (fs.existsSync(dir) == false) fs.mkdirSync(dir);
    //TODO File speichern
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
      message: 'Files', //TODO file
    };
  } catch (err) {
    console.error(err);
  }
}

module.exports({ writeFile, writeFileAnonym, getFile });
