'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const{body} = require('express-validator');

const catController = require('../controllers/catController');

const fileFilter =  (req, file, cb) => {
   const acceptedTypes = ['image/jpeg', 'image/png', 'image/gif'];
   if(acceptedTypes.includes(file.mimetype)){
      cb(null, true)
   }else{
      cb(null, false)
   }
   
}

const upload = multer({dest : 'uploads/'});


router.get('/', catController.getCats)
   .get('/:catId', catController.getCat)
   .post('/',
      body('name').isAlphanumeric(),
      body('birthdate').isDate(),
      body('weight').isFloat({min:0.1, max:30}),
      body('owner').isInt({min:1}),
      upload.single('cat'), catController.createCat)
   .put('/', catController.modifyCat)
   .put('/:catId',catController.modifyCat )
   .delete('/:catId', catController.deleteCat);

module.exports = router;