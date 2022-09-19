const express = require("express");
const router = express.Router();

const image = require("./image")
router.use('/image', image);

const device = require("./device")
router.use('/device', device);

const user = require("./user")
router.use('/user', user);

module.exports = router;