const path = require('path');
const fs = require('fs');

function deleteFile(filePath, name) {
  // path => upload/...
  // name => upload/.../name.xyz
  const dir = path.join(__dirname, '../upload/', filePath, name);
  fs.unlinkSync(dir);
}

// Example deleteFile('anon', 'test.png');

// Route delete/file aufrufen

module.exports = { deleteFile };
