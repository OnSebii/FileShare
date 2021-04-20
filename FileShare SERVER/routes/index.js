const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {
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
} = require('../model');

//////////////////////////////////////////////////////////////// LOGIN/REGISTER
router.get(
  '/login',
  asyncHandler(async (req, res) => {
    // TODO Wait until express sessions are implemented
    const checkUser = await checkUser(email, password);
  }),
);
router.post(
  '/register',
  asyncHandler(async (req, res) => {
    // TODO
    // Hashing: const password = bcrypt(req.body.password);
    let password = req.body.password;
    const result = await registerUser(req.body.email, password, req.body.firstname, req.body.lastname);
    res.status(result.code).json(result);
  }),
);

router.post(
  '/upload-anon',
  asyncHandler(async (req, res) => {
    const result = await uploadFile('anon', req.files.upload);
    res.status(result.status).json(result.data);
  }),
);

//////////////////////////////////////////////////////////////// USER DATA
router.get(
  '/user',
  asyncHandler(async (req, res) => {
    // TODO
    // let result;
    // if(await checkUser(email, password))
    //     result = await getUserData(email);
    // res.status(result.code).json(result);
  }),
);
router.post(
  '/user-email',
  asyncHandler(async (req, res) => {
    // TODO
    // let result;
    // if(await checkUser(email, password))
    //    result = await updateUserName(email);
    // res.status(result.code).json(result);
  }),
);
router.post(
  '/user-password',
  asyncHandler(async (req, res) => {
    // TODO
    // let result;
    // if(await checkUser(email, password))
    //    result = await updateUserPassword(email, new_password)
    // res.status(result.code).json(result);
  }),
);
router.delete(
  '/user',
  asyncHandler(async (req, res) => {
    // TODO
    // let result;
    // if(await checkUser(email, password))
    //    result = await deleteUser(email, password)
    // res.status(result.code).json(result);
  }),
);

//////////////////////////////////////////////////////////////// USER FILES
router.post(
  '/upload',
  asyncHandler(async (req, res) => {
    // let result;
    // if(await checkUser(email, password))
    //    result = await addUserFile(email, name, path)
    // res.status(result.code).json(result);
    // if (email == "anonymous") await setSynonymFilePath(id from addUserFile)
  }),
);
router.post(
  '/add-user',
  asyncHandler(async (req, res) => {
    // const checkUser = await checkOwner(email, password);
    // await addUserFileConnection(email, data_id, false)
  }),
);
router.post(
  '/add-synonym',
  asyncHandler(async (req, res) => {
    // const checkUser = await checkOwner(email, password);
    // await setSynonymFilePath(id, synonym_path)
  }),
);
router.put(
  '/file',
  asyncHandler(async (req, res) => {
    // const checkUser = await checkOwner(email, password);
    // await updateUserFile(id, name)
  }),
);
router.delete(
  '/file',
  asyncHandler(async (req, res) => {
    // const checkUser = await checkOwner(email, password);
    // await deleteUserFile(id)
  }),
);

router.get(
  '/anon/:path',
  asyncHandler(async (req, res) => {
    // TODO path zum File zurückgeben
    // Wenn das File nicht vorhanden ist: 404
    // if (syn == "") 
    //res.status(result.code).send();

    // path -> echte
    // syn_path -> app.get(/syn, func() { schau in der db nach syn_path für path -> return ./upload/email/file })
  }),
);
router.get(
  '/:syn_path',
  asyncHandler(async (req, res) => {
    // TODO path zum File zurückgeben
    // Wenn das File nicht vorhanden ist: 404
    // if (syn == "") 
    //res.status(result.code).send();

    // path -> echte
    // syn_path -> app.get(/syn, func() { schau in der db nach syn_path für path -> return ./upload/email/file })
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
