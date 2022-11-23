'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async (res) => {
  try {
    const sql = 'SELECT user_id, name, email, role FROM wop_user';
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};
const getUserById = async (id, res) => {
  try {
    const sql = 'SELECT user_id, name, email, role FROM wop_user ' +
                'WHERE user_id=' + id;
    const [rows] = await promisePool.query(sql);
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const getUserLogin = async (user) => {
  try{
    console.log('getUserLogin()',user);
    const [rows] = await promisePool.execute(
      'SELECT * FROM wop_user WHERE email = ?;',
      user);
      return rows;
  }catch (e){
    console.log('error', e.message);
  }
};

const addUser = async (user, res) => {
  try {
    const sql = 'INSERT INTO wop_user VALUES (null, ?, ?, ?, ?)';
    const values = [user.name, user.email, user.passwd, user.role];
    const [result] = await promisePool.query(sql, values);
    return result.insertId;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};


/* const updateUserById = async (id, res) => {
  try{
    const sql = 'UPDATE wop_user SET name = ?, email = ?, role = ? WHERE user_id = ?';
    const values = [user.name, user.email, user.role, user.user_id];
    const [rows] = await promisePool.query(sql,values);
    return rows;
  }catch (e){
    console.error("error", e.message);
    res.status(500).json({'error': e.message});
  }
};

const deleteUserById = async (id, res) => {
  try {
    const [rows] =
      await promisePool.query("DELETE FROM wop_user WHERE user_id =" +id);
      return rows;
  }catch (e){
    console.error("error", e.message);
    res.status(500).json({'error': e.message});
  }
};
 */

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  getUserLogin
};