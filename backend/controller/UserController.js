const User = require("../models/User");

module.exports = class UserController {
    
    static Login = async (req, res, next) => {
        try {
            let { login } = req.body;
            const { username, password } = login
            await User.login(username, password)
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