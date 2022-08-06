const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    deviceName: {
        type: String,
        required: true,
    },
    devicePhoto: {
        type: String,
    },
}, { versionKey: false});

const Device = mongoose.model('Device', DataSchema, 'devices');
module.exports = Device;