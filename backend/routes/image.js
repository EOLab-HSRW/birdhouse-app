const express = require("express");
const ImageController = require("../controller/ImageController");
const { requireAuth } = require("../middleware/authMiddleware");
const fileUpload = require("../utils/fileUpload");
const router = express.Router();

router.post('/add-image', requireAuth ,fileUpload("./storage/images"), ImageController.addImage);
router.get('/getAll/:id', ImageController.getAll);

module.exports = router;