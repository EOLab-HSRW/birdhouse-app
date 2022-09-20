const Device = require("../models/Device");
const config = require('../config/config');
const jwt = require("jsonwebtoken")

const createToken = (id) => {
    return jwt.sign({ id }, config.SECRET, {
        expiresIn: 3*24*60*60*1000
    })
}

const deviceExists = async (device) => {
    const { deviceName, deviceSchool } = device
    const Found = await Device.findOne({deviceName, deviceSchool });
	if (Found == null) {
        const deviceData = {
            data: Found,
            exists: false,
        }
        return deviceData;
	} else {
        const deviceData = {
            data: Found,
            exists: true,
        }
        return deviceData;
    }
}

module.exports = class DeviceController {
    
    static addDevice = async (req, res) => {
        try {
            const { device } = req.body;
            const deviceData = await deviceExists(device)
            const { data, exists } = deviceData
            if(exists){
                const token = createToken(data._id);
                return res.status(200).json({
                    code: 200,
                    message: "Login Sucessful, Device Already Exists!",
                    data: { 
                        device: data._id,
                        token,
                    },
                });
            } else {
                const deviceAdd = await new Device(device).save();
                const token = createToken(deviceAdd._id);
                return res.status(200).json({
                    code: 200,
                    message: "Login Sucessful, Device Added Sucessfully!",
                    data: { 
                        device: deviceAdd._id,
                        token,
                    },
                });
            }
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
            const all = await Device.find();
            
            return res.status(200).json({
                code: 200,
                message: "Current Devices!",
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