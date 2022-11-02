'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

  router.post('/', (req, res) => {
    console.log(req);
    res.send('From this endpoint, you can add more user.')
  })

  router.put('/', (req, res) => {
    res.send('From this endpoint you can edit user.')
  });

  router.delete('/', (req, res) => {
    res.send('From this endpoint you can delete users.')
  });

  module.exports = router;