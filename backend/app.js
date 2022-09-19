const express = require("express");
const router = require("./routes/api");
const cors = require("cors");
const app = new express();
const bodyParser = require("body-parser");
const multer = require("multer");

app.use(bodyParser.json());

app.use(cors());



app.use("/image", express.static("storage/images"));

app.use("/api/v1", router);

app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(418).json({
            err_code: err.code,
            err_message: err.message,
        });
    }
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'frontend','build','index.html'));
    });

} 

app.use('*', (req, res) => {
    res.status(404).json({ 
        status: "fail",
        data: "Not Found"
    });
});

module.exports = app;