'use strict';
// catController
const catModel = require('../models/catModel');


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
    console.log(req.body);
    const cat = req.body;
    cat.filename = req.file.filename;
    const catId = await catModel.addCat(cat,res);
    res.status(201).json({catId});
};


const modifyCat = (req,res) => {
};

const deleteCat = async (req,res) => {
    const result = await catModel.deleteCatById(req.params.catId, res);
    if(result.affectedRows > 0){
        res.json({message: 'cat deleted'} );
    }else{
        res.json({message: 'This cat had been deleted before!'})
    }
};

module.exports = {
    getCats,
    getCat,
    modifyCat,
    createCat,
    deleteCat
};