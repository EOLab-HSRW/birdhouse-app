const express = require("express");
const ImageController = require("../controller/ImageController");
const fileUpload = require("../utils/fileUpload");
const router = express.Router();

router.post('/add-image', fileUpload("./storage/images"), ImageController.addImage);
router.get('/getAll', ImageController.getAll);

module.exports = router;