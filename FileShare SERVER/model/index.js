const db = require('../db');
const fs = require('fs');
const path = require('path');
const shortid = require('shortid');
const { hashPassword, comparePassword } = require('./bcFunctions');

//////////////////////////////////////////////////////////////// CHECK/REGISTER
async function checkUser(email, password) {
  const { rows } = await db.query('SELECT password FROM users WHERE email = $1', [email]);
  const result = await comparePassword(password, rows[0].password); //INFO: Davor rows.password => muss aber zu rows[0].password geändert werden.
  return result;
}
async function registerUser(email, password, firstname, lastname) {
  const hashedPassword = await hashPassword(password);
  const { rows } = await db.query(
    'INSERT INTO users(email, password, firstname, lastname) VALUES ($1, $2, $3, $4) RETURNING email',
    [email, hashedPassword, firstname, lastname],
  );
  return {
    data: rows[0].email,
    status: 200,
  };
}

//////////////////////////////////////////////////////////////// USER DATA
async function getUserData(email) {
  const { rows } = await db.query('SELECT email, firstname, lastname FROM users WHERE email = $1', [email]);
  return {
    data: rows,
    status: 200,
  };
}
async function getUserFiles(email) {
  const { rows } = await db.query(
    'SELECT id, name, path, synonym_path, upload_date, admin FROM users JOIN user_data USING (email) JOIN files ON id = data_id WHERE email = $1 ORDER BY admin',
    [email],
  );
  return {
    data: rows,
    status: 200,
  };
}
async function updateUserName(email, firstname, lastname) {
  const { rows } = await db.query(
    'UPDATE users SET firstname = $1, lastname = $2 WHERE email = $3 RETURNING firstname, lastname',
    [firstname, lastname, email],
  );
  return {
    data: rows,
    status: 200,
  };
}
async function updateUserPassword(email, password) {
  const hashedPassword = await hashPassword(password);
  await db.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, email]);
  return {
    data: true,
    status: 200,
  };
}
async function deleteUserFiles(email) {
  await db.query(
    'DELETE FROM files WHERE id IN (SELECT id FROM files JOIN user_data ON id = data_id JOIN users USING (email) WHERE email = $1 AND admin = true)',
    [email],
  );
}
async function deleteUser(email) {
  await deleteUserFiles(email);
  const { rows } = await db.query('DELETE FROM users WHERE email = $1 RETURNING email', [email]);
  return {
    data: rows[0].email,
    status: 200,
  };
}

//////////////////////////////////////////////////////////////// USER FILES
async function checkFileOwner(email, data_id) {
  const { rows } = await db.query(
    'SELECT 1 FROM user_data WHERE email = $1 AND data_id = $2 AND admin = true',
    [email, data_id],
  );
  return rows.length > 0;
}

async function addUserFile(email, name, path) {
  const { rows } = await db.query(
    'INSERT INTO files(name, path, upload_date) VALUES ($1, $2, now()) RETURNING id',
    [name, path],
  );
  console.log(rows[0]);
  if (email != 'no-email')
    await db.query('INSERT INTO user_data(email, data_id, admin) VALUES ($1, $2, true)', [email, rows[0].id]);
  return {
    data: rows[0].id,
    status: 200,
  };
}
async function addUserFileConnection(email, data_id, new_email) {
  const permission = await checkFileOwner(email, data_id);
  if (permission) {
    const { rows } = await db.query(
      'INSERT INTO user_data(email, data_id, admin) VALUES ($1, $2, false) RETURNING email, data_id',
      [new_email, data_id],
    );
    return {
      data: rows,
      status: 200,
    };
  }
}
async function getFileOwner(email, id) {
  const permission = await checkFileOwner(email, id);
  if (permission) {
    const { rows } = await db.query('SELECT email, admin FROM user_data WHERE data_id = $1', [id]);
    return {
      data: rows,
      status: 200,
    };
  }
}
async function setSynonymFilePath(email, id) {
  const permission = await checkFileOwner(email, id);
  if (permission) {
    // TODO
    // Create random file path for synonym_path
    const synonym_path = shortid.generate() + shortid.generate() + shortid.generate();
    // Make file accessible from anywhere (add app.get route: synonym_path url to real path)
    const { rows } = await db.query(
      'UPDATE files SET synonym_path = $1 WHERE id = $2 RETURNING synonym_path',
      [synonym_path, id],
    );
    return {
      data: rows.synonym_path,
      status: 200,
    };
  }
  return {
    data: false,
    status: 200,
  };
}

async function updateUserFile(email, id, name) {
  const permission = await checkFileOwner(email, id);
  if (permission) {
    const { rows } = await db.query('UPDATE files SET name = $1 WHERE id = $2 RETURNING id', [name, id]);
    return {
      data: rows.id,
      status: 200,
    };
  }
  return {
    data: false,
    status: 200,
  };
}
async function deleteUserFile(email, id) {
  // TODO
  // Disable app.get route
  const permission = await checkFileOwner(email, id);
  if (permission) {
    const { rows } = await db.query('DELETE FROM files WHERE id = $1 RETURNING id', [id]);
    // Delete real file from user folder
    // fs.unlinkSync(path.join(__dirname, '../upload/', email, name));

    return {
      data: rows.id,
      status: 200,
    };
  }
  return {
    data: false,
    status: 200,
  };
}

async function uploadFile(user, file, name) {
  // TODO Upload User File
  // User-based directories with files, not accessible from outside
  // Called at addUserFile()
  const dir = path.join(__dirname, '../upload', user);
  const cstmID = shortid.generate();
  const filename = `${cstmID}.${file.name.split('.')[1]}`;
  const uploadedFile = path.join(__dirname, `../upload/`, user, filename);
  try {
    if (fs.existsSync(dir) == false) fs.mkdirSync(dir);
    fs.writeFileSync(uploadedFile, file.data);
  } catch (err) {
    console.error(err);
  }

  return {
    data: filename,
    status: 200,
  };
}

// TODO Delete User File
// Called at deleteUserFile()

module.exports = {
  checkUser,
  registerUser,
  getUserData,
  getUserFiles,
  updateUserName,
  updateUserPassword,
  deleteUser,
  addUserFile,
  addUserFileConnection,
  setSynonymFilePath,
  updateUserFile,
  deleteUserFile,
  uploadFile,
  getFileOwner,
};

// async function getEmployee(id) {
//   const { rows } = await db.query('SELECT * FROM employees WHERE employee_id = $1', [id]);
//   if (rows.length > 0)
//     return {
//       code: 200,
//       data: rows[0],
//     };
//   else
//     return {
//       code: 404,
//       data: `the specified employee ${id} was not found in the database`,
//     };
// }
// async function patchEmployee(id, data) {
//   const result = await getEmployee(id);
//   if (result.code != 200) return result;
//   let props = [];
//   for (const prop in data) props.push(`${prop} = '${data[prop]}'`);
//   let cmd = `UPDATE employees SET ${props.join(',')} WHERE employee_id = $1`;
//   await db.query(cmd, [id]);

//   return {
//     code: 200,
//     data: true,
//   };
// }
// async function insertEmployee(e) {
//   let { rows } = await db.query('SELECT MAX(employee_id) AS max FROM employees');
//   let employee_id = rows[0].max + 1;
//   await db.query(
//     `INSERT INTO employees (employee_id, last_name, first_name, title)
//                            VALUES($1,$2,$3,$4)`,
//     [employee_id, e.lastName, e.firstName, e.title],
//   );
//   return {
//     code: 200,
//     data: employee_id,
//   };
// }
