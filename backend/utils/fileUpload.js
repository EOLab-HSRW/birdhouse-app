const multer = require("multer");
const path = require("path");

const destination = './backend/storage/images'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destination)
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    },
});

const fileUpload = multer({
    storage: storage,
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
});

module.exports.send = (req, res, next) => {
    
    return fileUpload.single('image')(req, res, () => {
        if (!req.file) return res.json({ error: 'Only these files extensions allowed: PNG, JPG or JPEG!' })
        next()
    })
}