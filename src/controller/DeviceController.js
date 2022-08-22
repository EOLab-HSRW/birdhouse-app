const Device = require("../models/Device");

const deviceExists = async (device) => {
    const { deviceName, deviceSchool } = device
    const Found = await Device.findOne({ deviceName, deviceSchool });
	if (Found) {
        const deviceData = {
            data: Found,
            exits: true,
        }
        return deviceData;
	} else {
        const deviceData = {
            data: Found,
            exits: false,
        }
        return deviceData;
    }
}

module.exports = class DeviceController {
    
    static addDevice = async (req, res) => {
        try {
            const { device } = req.body;
            const exists = await deviceExists(device)
            const { data } = exists
            if(exists){
                return res.status(200).json({
                    code: 200,
                    message: "Login Sucessful, Device Already Exists!",
                    data: { 
                        device: data._id,
                        token: req.token,
                    },
                });
            } else {
                const deviceAdd = await new Device(device).save();
                return res.status(200).json({
                    code: 200,
                    message: "Login Sucessful, Device Added Sucessfully!",
                    data: { 
                        device: deviceAdd._id,
                        token: req.token,
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