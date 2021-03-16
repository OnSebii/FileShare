const db = require('../db');

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

async function loginUser(email) {
  const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  // ...
}
async function registerUser(email, password, firstname, lastname) {
  const { rows } = await db.query('INSERT INTO users(email, password, firstname, lastname) VALUES ($1, $2, $3, $4)', [email, password, firstname, lastname]);
  // ...
}

async function getUserData(email) {
  const { rows } = await db.query('SELECT id, name, path, synonym_path, upload_date FROM users JOIN user_data USING (email) JOIN files ON id = data_id WHERE email = $1', [email]);
  // ...
}
async function updateUserName(email, firstname, lastname) {
  const { rows } = await db.query('UPDATE users SET firstname=$1, lastname=$2 WHERE email = $3', [firstname, lastname, email]);
  // ...
}
async function updateUserPassword(email, password) {
  const { rows } = await db.query('UPDATE users SET password=$1 WHERE email = $2', [password, email]);
  // ...
}
async function deleteUserFiles(email) {
  const { rows } = await db.query('DELETE FROM files WHERE id = (SELECT DISTINCT id FROM users JOIN user_data USING (email) JOIN files ON id = data_id WHERE email = $1)', [email]);
  // ...
}
async function deleteUser(email) {
  // Info: Call deleteUserFiles()
  const { rows } = await db.query('DELETE FROM users WHERE email = $1;', [email]);
  // ...
}

async function getUserFiles(email) {
  const { rows } = await db.query('SELECT id, name, path, synonym_path, upload_date, admin FROM users JOIN user_data USING (email) JOIN files ON id = data_id WHERE email = $1;', [email]);
  // ...
}
async function addUserFiles(email) {
  const { rows } = await db.query('INSERT INTO files(name, path, upload_date) VALUES ($1, $2, $3);', [email]);
  // Info: Call addUserFileConnection()
  // ...
}
async function addUserFileConnection(email) {
  const { rows } = await db.query('INSERT INTO user_data(email, data_id, admin) VALUES ('palatin.d02@htlwienwest.at', 2, true);, [email]);
  // ...
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

// async function delEmployee(id) {
//   const result = await getEmployee(id);
//   if (result.code != 200) return result;

//   const { rows } = await db.query('SELECT * FROM orders WHERE employee_id = $1', [id]);
//   for (const row of rows) {
//     await db.query('DELETE FROM order_details WHERE order_id =$1', [row.order_id]);
//   }
//   await db.query('DELETE FROM orders WHERE employee_id = $1', [id]);
//   await db.query('DELETE FROM employees WHERE employee_id = $1', [id]);
//   return {
//     code: 200,
//     data: true,
//   };
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

module.exports = {};
