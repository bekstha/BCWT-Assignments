'use strict';
const userModel = require('../models/userModel');
const {validationResult} = require('express-validator');

const getUsers = async (req, res) => {
  const users = await userModel.getAllUsers(res);
  res.json(users);
};

const getUser = async (req, res) => {
  // choose only one object with matching id
  const user = await userModel.getUserById(req.params.userId, res);
  if (user) {
    res.json(user);
  } else {
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

const modifyUser = async (req, res) => {
  const newUser = req.body;
  if(req.params.userId) {
    newUser.userId = req.params.userId;
  }
  const result = await userModel.addUser.updateUserById(user,res);
  if(result.affectedRows > 0) {
    res.json({message: 'usermodified: ' + user.userId});
  }else{
    res.status(400).json({message: 'nothing changed'});
  }
};

const deleteUser = async(req, res) => {
  const result = await userModel.deleteUserById(req.params.userId,res);
  console.log('user deleted', result)
  if( result.affectedRows > 0) {
    res.json({message: 'user deleted'});
  } else {
    res.status(404).json({message: ' user was already deleted'});
  }
};

module.exports = {
  getUser,
  getUsers,
  modifyUser,
  createUser,
  deleteUser
};