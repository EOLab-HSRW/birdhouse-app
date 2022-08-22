const express = require("express");
const DeviceController = require("../controller/DeviceController");
const router = express.Router();

router.get('/getAll', DeviceController.getAll);

module.exports = router;