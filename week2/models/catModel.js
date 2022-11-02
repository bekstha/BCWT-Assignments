// ./models/catModel.js
"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllCats = async (res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_cat");
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const getCatById = async (res, catId) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query(
      "SELECT wop_cat.cat_id,wop_cat.name as cat_name,wop_cat.weight,wop_user.name as owner_name, wop_cat.filename,wop_cat.birthdate FROM wop_user INNER JOIN wop_cat ON wop_cat.owner = wop_user.user_id WHERE cat_id = ?",
      [catId]
    );
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

module.exports = {
  getAllCats,
  getCatById,
};
