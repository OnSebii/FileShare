const db = require('../db');
const fs = require('fs');
const path = require('path');
const shortid = require('shortid');

//////////////////////////////////////////////////////////////// CHECK/REGISTER
async function checkUser(email, password) {
  const { rows } = await db.query('SELECT 1 FROM users WHERE email = $1 AND password = $2', [email, password]);
  return rows.length > 0 ? true : false;
}
// TODO: CHECK USER RIGHTS + checkUser() -> File owner check for editing selected
async function registerUser(email, password, firstname, lastname) {
  const { rows } = await db.query('INSERT INTO users(email, password, firstname, lastname) VALUES ($1, $2, $3, $4) RETURNING email', [email, password, firstname, lastname]);
  return {
    data: rows.email,
    status: 200,
  };
}

//////////////////////////////////////////////////////////////// USER DATA
async function getUserData(email) {
  const { rows } = await db.query('SELECT id, name, path, synonym_path, upload_date FROM users JOIN user_data USING (email) JOIN files ON id = data_id WHERE email = $1', [email]);
  return {
    data: rows,
    status: 200,
  };
}
async function updateUserName(email, firstname, lastname) {
  const { rows } = await db.query('UPDATE users SET firstname = $1, lastname = $2 WHERE email = $3 RETURNING firstname, lastname', [firstname, lastname, email]);
  return {
    data: rows,
    status: 200,
  };
}
async function updateUserPassword(email, password) {
  const { rows } = await db.query('UPDATE users SET password = $1 WHERE email = $2', [password, email]);
  return {
    data: rows.email,
    status: 200,
  };
}
async function deleteUserFiles(email) {
  await db.query('DELETE FROM files WHERE id = (SELECT DISTINCT id FROM users JOIN user_data USING (email) JOIN files ON id = data_id WHERE email = $1)', [email]);
}
async function deleteUser(email) {
  await deleteUserFiles(email);
  const { rows } = await db.query('DELETE FROM users WHERE email = $1 RETURNING email', [email]);
  return {
    data: rows.email,
    status: 200,
  };
}

//////////////////////////////////////////////////////////////// USER FILES
async function addUserFile(email, name, path) {
  const { rows } = await db.query('INSERT INTO files(name, path, upload_date) VALUES ($1, $2, now()) RETURNING id', [name, path]);
  await addUserFileConnection(email, rows.id, true);
  return {
    data: rows.id,
    status: 200,
  };
}
async function addUserFileConnection(email, data_id, admin) {
  const { rows } = await db.query('INSERT INTO user_data(email, data_id, admin) VALUES ($1, $2, $3) RETURNING email, data_id', [email, data_id, admin]);
  return {
    data: rows,
    status: 200,
  };
}
async function setSynonymFilePath(id, synonym_path) {
  const { rows } = await db.query('UPDATE files SET synonym_path = $1 WHERE id = $2 RETURNING synonym_path', [synonym_path, id]);
  return {
    data: rows.synonym_path,
    status: 200,
  };
}

async function updateUserFile(id, name) {
  const { rows } = await db.query('UPDATE files SET name = $1 WHERE id = $2 RETURNING id', [name, id]);
  return {
    data: rows.id,
    status: 200,
  };
}
async function deleteUserFile(id) {
  const { rows } = await db.query('DELETE FROM files WHERE id = $1 RETURNING id', [id]);
  return {
    data: rows.id,
    status: 200,
  };
}

async function uploadFile(user, file) {
  const dir = path.join(__dirname, '../upload', user);
  const uploadedFile = path.join(__dirname, `../upload/anon/${shortid.generate()}.${file.name.split('.')[1]}`);
  try {
    if (fs.existsSync(dir) == false) fs.mkdirSync(dir);
    fs.writeFileSync(uploadedFile, file.data);
  } catch (err) {
    console.error(err);
  }

  return {
    data: 'uploaded',
    status: 200,
  };
}

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

module.exports = {
  checkUser,
  registerUser,
  getUserData,
  updateUserName,
  updateUserPassword,
  deleteUser,
  addUserFile,
  addUserFileConnection,
  setSynonymFilePath,
  updateUserFile,
  deleteUserFile,
  uploadFile,
};
