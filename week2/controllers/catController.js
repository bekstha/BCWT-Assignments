'use strict';
// catController
const catModel = require('../models/catModel');

const cats = catModel.cats;

const getCats = (req,res) => {
    res.json(cats);
};

const getCat = (req,res) => {
    //choose only one object with matching id
    const cat = cats.filter(cat => {
        return req.params.catId == cat.id;
    })[0];

    if(cat){
        res.json(cat);
    }else{
        res.sendStatus(404);
    }
};

const createCat = (req,res) => {
    console.log(req.body);
    res.send('adding a cat');
};

const modifyCat = (req,res) => {
};

const deleteCat = (req,res) => {
};

module.exports = {
    getCats,
    getCat,
    modifyCat,
    createCat,
    deleteCat
};