const express = require('express');
const router = express.Router();


// Routes for Item Control - In-class exercise.

const itemCtrl = require('./item-controller');
router.get('/hello', itemCtrl.getWorld);
router.get('/hello/:foo/:bar',itemCtrl.getWorldParams);
router.post('/hello',itemCtrl.postWorld);


// Routes for User Management

const userCtrl = require('./user-controller');

router.post('/users',userCtrl.createUser);
router.get('/users',userCtrl.getUsers);
router.get('/users/:id',userCtrl.getUser);
router.delete('/users/:id',userCtrl.deleteUser);
router.put('/users/:id',userCtrl.updateUser);


// Routes for Images Upload

module.exports.UPLOAD_PATH = "uploads";

var multer = require("multer");
var upload = multer({dest:module.exports.UPLOAD_PATH});
var imageCtrl = require('./image-controller');


router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/image/:id', imageCtrl.getImage);
router.delete('/image/:id', imageCtrl.deleteImage);

module.exports = router;
