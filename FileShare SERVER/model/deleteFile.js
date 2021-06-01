const path = require('path');
const fs = require('fs');

function deleteFile(filePath, name) {
  // path => upload/...
  // name => upload/.../name.xyz
  const dir = path.join(__dirname, '../public/upload/', filePath, name);
  fs.unlinkSync(dir);
}

function deleteAnon() {
  const dir = path.join(__dirname, '../public/upload/anon/');

  fs.readdir(dir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(dir, file), (err) => {
        if (err) throw err;
      });
    }
  });
}

// Example deleteFile('anon', 'test.png');

// Route delete/file aufrufen

module.exports = { deleteFile, deleteAnon };
