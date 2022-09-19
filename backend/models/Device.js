const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    deviceName: {
        type: String,
        required: true,
    },
    deviceSchool: {
        type: String,
        required: true,
    },
}, { versionKey: false});

const Device = mongoose.model('Device', DataSchema, 'devices');
module.exports = Device;