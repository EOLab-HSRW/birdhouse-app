const express = require("express");
const DeviceController = require("../controller/DeviceController");
const UserController = require("../controller/UserController");
const router = express.Router();

router.post('/login', UserController.Login, DeviceController.addDevice);
// router.post('/signup', UserController.SignUp);

module.exports = router;