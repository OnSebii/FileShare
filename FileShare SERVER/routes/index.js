const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {
  // RETURNING DATA
  checkUser, // (email, password) -> bool [Page: Login]
  registerUser, // (email, password, firstname, lastname) -> email for login page [Page: Register]
  getUserData, // (email) -> obj(email, id, firstname, lastname) [Page: Login]
  getUserFiles, // (email) -> obj(id, name, path, synonym_path, upload_date, admin) [Page: Dashboard]
  updateUserName, // (email, firstname, lastname) -> obj(firstname, lastname) [Page: Account]
  updateUserPassword, // (email, password) -> email [Page: Account]
  deleteUser, // (email) -> email [Page: Account]
  addUserFile, // (email, name) -> file_id [Page: Dashboard]
  addUserFileConnection, // (email, data_id, new_email) -> obj(email, data_id) / false if not permitted [Page: Dashboard]
  setSynonymFilePath, // (id) -> synonym_path / false if not permitted [Page: Dashboard]
  updateUserFile, // (email, id, name) -> id / false if not permitted [Page: Dashboard]
  deleteUserFile, // (email, id) -> id / false if not permitted [Page: Dashboard]
  uploadFile, // (user, file) -> cstmID [Page: Home/Dashboard]
  // deleteFile (user, path) -> bool [Page: Dashboard] - called regularly via cron job
} = require('../model');

//////////////////////////////////////////////////////////////// redirect user if he isnt logged in
const redirectLogin = (req, res, next) => {
  if (!req.session.userId) res.status(400).send('You are not logged in!');
  else next();
};

//////////////////////////////////////////////////////////////// LOGIN/REGISTER
router.post(
  // Required: email, password -- FERTIG
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const correct = await checkUser(email, password);
    if (correct) {
      const result = await getUserData(email);
      if (result.data[0].email) {
        req.session.userId = result.data[0].email;
        res.status(result.status).json({
          firstname: result.data[0].firstname,
          lastname: result.data[0].lastname,
          email,
        });
      }
    } else res.status(500).json(false);
  }),
);

router.post(
  // Required: email, password, firstname, lastname
  '/register',
  asyncHandler(async (req, res) => {
    const result = await registerUser(
      req.body.email,
      req.body.password,
      req.body.firstname,
      req.body.lastname,
    );
    res.status(result.code).json(result);
  }),
);

router.get(
  '/logout',
  asyncHandler(async (req, res) => {
    req.session.destroy();
    res.clearCookie(process.env.SESSION_NAME);
    res.status(200).send('');
  }),
);

router.post(
  // Required: file
  // TODO: Set path to database
  '/upload-anon',
  asyncHandler(async (req, res) => {
    const result = await uploadFile('anon', req.files.upload);
    // await addUserFile(email, name); TODO
    res.status(result.status).json(result.data);
  }),
);

//////////////////////////////////////////////////////////////// USER DATA
router.post(
  // Required: email, password -- FERTIG
  '/user',
  asyncHandler(async (req, res) => {
    const { email } = req.body;
    const result = await getUserFiles(email);
    res.status(200).send(result);
  }),
);
router.put(
  // Required: email, firstname, lastname -- FERTIG
  '/user-email',
  asyncHandler(async (req, res) => {
    const { email, firstname, lastname } = req.body;
    const result = await updateUserName(email, firstname, lastname);
    res.status(result.status).json(result);
  }),
);
router.put(
  // Required: email, new_password -- FERTIG
  '/user-password',
  asyncHandler(async (req, res) => {
    const { email, new_password } = req.body;
    const result = await updateUserPassword(email, new_password);
    res.status(result.status).json(result);
  }),
);
router.delete(
  // Required: email -- FERTIG
  '/user',
  asyncHandler(async (req, res) => {
    let { email } = req.body;
    const result = await deleteUser(email);
    res.status(result.code).json(result);
  }),
);

//////////////////////////////////////////////////////////////// USER FILES
router.post(
  // Required: email, name, file
  '/upload',
  redirectLogin,
  asyncHandler(async (req, res) => {
    // TODO if loggedIn
    const result = await addUserFile(email, name);
    // Call uploadFile() to save it
    // Check if filename already exists in uploadFile()
    res.status(result.code).json(result);
  }),
);
router.post(
  // Required: email, data_id, new_email
  '/add-user',
  asyncHandler(async (req, res) => {
    // TODO if loggedIn
    const result = await addUserFileConnection(email, data_id, new_email);
  }),
);
router.post(
  // Required: email, id
  '/add-synonym',
  asyncHandler(async (req, res) => {
    // TODO if loggedIn
    const result = await setSynonymFilePath(email, id);
  }),
);
router.put(
  // Required: email, id, name
  '/file',
  asyncHandler(async (req, res) => {
    // TODO if loggedIn
    const result = await updateUserFile(email, id, name);
  }),
);
router.delete(
  // Required: email, id
  '/file',
  asyncHandler(async (req, res) => {
    // TODO if loggedIn
    const result = await deleteUserFile(email, id);
  }),
);

router.get(
  '/anon/:path',
  asyncHandler(async (req, res) => {
    // Search upload/anon/:path
    // -> Send file
  }),
);
router.get(
  '/registered/:syn_path',
  asyncHandler(async (req, res) => {
    // Syn_path -> return path (random)
  }),
);

// router.get(
//   '/employees',
//   asyncHandler(async (req, res) => {
//     const result = await getEmployees();
//     res.status(result.code).json(result);
//   }),
// );

// router.get(
//   '/employees/:id',
//   asyncHandler(async (req, res) => {
//     const result = await getEmployee(req.params.id);
//     res.status(result.code).json(result);
//   }),
// );

// router.delete(
//   '/employees/:id',
//   asyncHandler(async (req, res) => {
//     const result = await delEmployee(req.params.id);
//     res.status(result.code).json(result);
//   }),
// );

// router.patch(
//   '/employees/:id',
//   asyncHandler(async (req, res) => {
//     const result = await patchEmployee(req.params.id, req.body);
//     res.status(result.code).json(result);
//   }),
// );

// router.post(
//   '/employees',
//   asyncHandler(async (req, res) => {
//     const result = await insertEmployee(req.body);
//     res.status(result.code).json(result);
//   }),
// );

module.exports = router;
