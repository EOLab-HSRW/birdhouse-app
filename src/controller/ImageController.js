const Image = require('../models/Image');

module.exports = class ImageController {
    
    static addImage = async (req, res) => {

        let payload = req.body;
        if (req.file) var fileName = req.file.filename;
        payload.fileName = fileName;
        try {
            const imageAdd = await new Image(payload).save();
            return res.status(200).json({
                code: 200,
                message: "Image Added Sucessfully!",
                data: imageAdd,
            });
        } catch (error) {
            res.status(501).json({
                code: 501,
                message: error.message,
                error: true,
            });
        }
    };

    static getAll = async (req, res) => {
        try{
            const all = await Image.find({device: req.params.id})
            
            return res.status(200).json({
                code: 200,
                message: "Current Device Images!",
                data: all,
            });
        } catch (err) {
            res.status(501).json({
                code: 501,
                message: error.message,
                error: true,
            });
        }
    }
};