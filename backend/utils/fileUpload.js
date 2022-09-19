const multer = require("multer");
const path = require("path");

const storage = (destination) => multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, destination)
    },
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    },
});

const fileUpload = (destination) => multer({
    storage: storage(destination),
    limits: {
        fileSize: 2 * 1024 * 1024, //2mb
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only these files extensions allowed: PNG, JPG or JPEG!'));
        }
    },
    onError: function(err, next){
        return console.log('Error: ', err);
    },
}).single('image');

module.exports = fileUpload;