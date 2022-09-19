const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    device: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
}, { timestamps: true, versionKey: false});

const Image = mongoose.model('Image', DataSchema, 'images');
module.exports = Image;