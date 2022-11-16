'use strict';

const userModel = require('../models/userModel');
//const { use } = require('../routes/catRoute');
const{validationResult} = require('express-validator');

const getUsers = async (req,res) => {
  const users = await userModel.getAllUsers(res);
/*    users.map(user => {
      delete user.password;
      return user;
   }) */
   res.json(users);
};

const getUser = async (req,res) => {
    //choose only one object with matching id
    const user = await userModel.getUserById(req.params.user_Id, res);
    if(user){
      res.json(user);
    }else{
      res.sendStatus(404);
    }
};

const createUser = async (req, res) => {
  console.log('Creating a new user:', req.body);
  const newUser = req.body;
  if (!newUser.role) {
    // default user role (normal user)
    newUser.role = 1;
  }
  const errors = validationResult(req);
  console.log('validation errors', errors);
  if (errors.isEmpty()) {
    const result = await userModel.addUser(newUser, res);
    res.status(201).json({message: 'user created', userId: result});
  } else {
    res.status(400).json({
      message: 'user creation failed',
      errors: errors.array()
    });
  }
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