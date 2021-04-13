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
} = require('../model');
const { registerUser } = require('../model');
const multer = require('multer');
const upload = multer();

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
    const result = await registerUser(
      req.body.email,
      password,
      req.body.firstname,
      req.body.lastname,
    );
    res.status(result.code).json(result);
  '/upload',
  upload.none(),
  asyncHandler(async (req, res) => {
    // const result = await req.body;
    // res.status(result.code).json(result);
    console.log(req.files);
    res.status(200).json('');
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
  '/user-information',
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
  '/file',
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
    // await deleteUserFile(id, name)
  }),
);

router.post(
  '/upload',
  asyncHandler(async (req, res) => {
    // const result = await req.body;
    // res.status(result.code).json(result);
    console.log(req.files.upload);
  }),
);

router.get(
  '/:path',
  asyncHandler(async (req, res) => {
    // TODO path zum File zurückgeben
    // Wenn das File nicht vorhanden ist: 404
    //res.status(result.code).send();
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
