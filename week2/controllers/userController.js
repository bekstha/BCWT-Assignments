'use strict';

const userModel = require('../models/userModel');
const { use } = require('../routes/catRoute');

const users = userModel.users;

const getUsers = (req,res) => {
   users.map(user => {
      delete user.password;
      return user;
   })
   res.json(users);
};

const getUser = (req,res) => {
    //choose only one object with matching id
    const user = users.filter(user => {
      return req.params.userId == user.id;
    })[0];

    if(user){
      delete user.password
      res.json(user);
    }else{
      res.sendStatus(404);
    }
};

const createUser = (req,res) => {
   //console.log(req.body);
   const userInfo = `username : ${req.body.name}, email : ${req.body.email}`;
   res.send('From this endpoint you can add user. ' + userInfo);
};

const modifyUser = (req,res) => {
};

const deleteUser = (req,res) => {
};

module.exports = {
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser
};