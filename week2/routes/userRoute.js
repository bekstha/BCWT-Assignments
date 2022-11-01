'use strict';
// userRoute
const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    //console.log(req)
    res.send('From this endpoint you can get user.')
  });

  router.get('/user/:userId', (req, res) => {
    //console.log(req.params)
    res.send('From this endpoint you can get user with Id: ' + req.params.userId)
  });

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