'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const{body, validationResult} = require('express-validator');

const userController = require('../controllers/userController');

router.get('/', userController.getUsers);

router.get('/:user_Id', userController.getUser);

router.post('/', body('name').isLength({min:3}),
body('email').isEmail(),
body('passwd').isLength({min:8}),
userController.createUser);

router.put('/', (req, res) => {
  res.send('From this endpoint you can edit user.')
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete users.')
});

module.exports = router;