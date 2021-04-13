const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { registerUser } = require('../model');

router.post(
  '/upload',
  asyncHandler(async (req, res) => {
    // const result = await req.body;
    // res.status(result.code).json(result);
    console.log(req.files.upload);
  }),
);

router.get(
  '/register',
  asyncHandler(async (req, res) => {
    // TODO Register page
    //res.status(result.code).send();
  }),
);

router.post(
  '/register',
  asyncHandler(async (req, res) => {
    // TODO Hashing function
    //const password = bcrypt(req.body.password);
    const result = await registerUser(req.body.email, passwort, req.body.firstname, req.body.lastname);
    res.status(result.code).json(result);
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
