'use strict';
const {rawListeners} = require('../database/db');
const catModel = require('../models/catModel');
const{validationResult} = require('express-validator');



const getCats = async (req,res) => {
    const cats = await catModel.getAllCats(res);
    res.json(cats);
};

const getCat = async (req,res) => {
    //choose only one object with matching id
    const cat = await catModel.getCatById(res, req.params.catId);
    if(cat){
        res.json(cat);
    }else{
        res.sendStatus(404);
    }
};

const createCat = async (req,res) => {
    const errors = validationResult(req);
    //file is missing or invalid
    if(!req.file){
        res.status(400).json({message: 'file missing or invalid'});
    }
    if(errors.isEmpty()){
        console.log(req.body);
        const cat = req.body;
        cat.owner = req.user.user_id;
        cat.filename = req.file.filename;
        const catId = await catModel.addCat(cat,res);
        res.status(201).json({message: 'cat created',catId});
    }else{
        res.status(400).json({
            message: 'cat creation failed',
            errors: errors.array()
          });
    }

};


const modifyCat = async (req, res) => {
    const cat = req.body;
    if (req.params.catId) {
      cat.id = req.params.catId;
    }
    const result = await catModel.updateCatById(cat, res);
    if (result.affectedRows > 0) {
      res.json({message: 'cat modified: ' + cat.id});
    } else {
      res.status(404).json({message: 'nothing changed'});
    }
};

const deleteCat = async (req,res) => {
    const result = await catModel.deleteCatById(req.params.catId, req.user.user_id, res);
    if(result.affectedRows > 0){
        res.json({message: 'cat deleted'} );
    }else{
        res.status(401).json({message: 'cat deletion failed'})
    }
};

module.exports = {
    getCats,
    getCat,
    modifyCat,
    createCat,
    deleteCat
};