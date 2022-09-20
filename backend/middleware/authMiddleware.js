const jwt = require('jsonwebtoken');
const User = require("../models/Device");
const config = require('../config/config');

const requireAuth = (req, res, next) => {
  
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, config.SECRET, (err, decodedToken) => {
      if (err) {
        res.json({
          auth: false
        });
      } else {
        req.id = decodedToken.id
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