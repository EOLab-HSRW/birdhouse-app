const jwt = require("jsonwebtoken")
const User = require("../models/User");
const config = require('../config/authKey.config');


const createToken = (id) => {
    return jwt.sign({ id }, config.secret, {
        expiresIn: 3*24*60*60*1000
    })
}

module.exports = class UserController {
    
    static Login = async (req, res, next) => {
        try {
            let { login } = req.body;
            const { username, password } = login
            const user = await User.login(username, password)
            const token = createToken(user._id);
            req.token = token
            next();
        } catch (error) {
            res.status(501).json({
                code: 501,
                message: error.message,
                error: true,
            });
        }
    };

    static SignUp = async (req, res) => {
        try {
            const user = new User({
                username: req.body.username, 
                password: req.body.password,
            });
            const result = await user.save();
            res.status(201).json({
                user: result._id,
            });
    
        } catch (error) {
            res.status(501).json({
                code: 501,
                message: error.message,
                error: true,
            });
        }
    }

};