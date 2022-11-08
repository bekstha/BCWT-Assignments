'use strict';

const userModel = require('../models/userModel');
//const { use } = require('../routes/catRoute');

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

const createUser = async (req,res) => {
   //console.log(req.body);
   const newUser = req.body;
   const result = await userModel.addUser(newUser, res);
   res.status(201).json({user_Id : result});

/*    const userInfo = `username : ${req.body.name}, email : ${req.body.email}`;
   res.send('From this endpoint you can add user. ' + userInfo); */
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