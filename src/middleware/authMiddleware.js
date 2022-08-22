const jwt = require('jsonwebtoken');
const User = require("../models/Device");
const config = require('../config/authKey.config');

const requireAuth = (req, res, next) => {

  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, config.secret, (err, decodedToken) => {
      if (err) {
        res.json({
          auth: false
        });
      } else {
        next()
      }
    })
  } else {
    res.json({
      auth: false
    });
  }
};

module.exports = { requireAuth };