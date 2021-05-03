const UPLOAD_PATH = require('./routes').UPLOAD_PATH;
const Image = require('./models/image')
const path = require('path');
const fs = require('fs');
const del = require('del');


// Create Single Image

exports.uploadImage = function(req, res) {

    let newImage = new Image();
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalname;
    newImage.description = req.body.description;
    
    newImage.save(err => {
        if(err){
            return res.sendStatus(400);
        }

        res.status(201).send({newImage})
    });

};

// Read SINGLE Image

exports.getImage = function(req, res) {
    let imgId = req.params.id;

    Image.findById(imgId, (err, image) => {
        if (err) {
            return res.sendStatus(400);
        }

        res.setHeader('Content-Type', 'image/jpeg');
        fs.createReadStream(path.join(UPLOAD_PATH, image.filename)).pipe(res);
    });
};


















// Read ALL Images

exports.getImages = function(req, res) {
    Image.find({}, '-__v')
    .lean()
    .exec((err, images) => {
        if (err) {
            return res.sendStatus(400);
        }

        for (let i = 0; i < images.length; i++) {
            var img = images[i];
            img.url = req.protocol + '://' + req.get('host') + '/images/' + img._id;
        }

        res.json(images);
    });
};





// Delete SINGLE Image

exports.deleteImage = function(req, res) {
    let imgId = req.params.id;

    Image.findByIdAndRemove(imgId, (err, image) => {
        if (err && image) {
            return res.sendStatus(400);
        }

        del([path.join(UPLOAD_PATH, image.filename)]).then(deleted => {
            res.sendStatus(200);
        });
    });
};