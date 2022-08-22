const express = require("express");
const router = require("./src/routes/api");
const cors = require("cors");
const app = new express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

app.use(bodyParser.json());

app.use(cors());

const URI = "mongodb+srv://admin:admin@cluster0.91baq8q.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URI,
    err => {
        if(err) throw err;
        console.log("Connected to DB");
    });

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

app.use('*', (req, res) => {
    res.status(404).json({ 
        status: "fail",
        data: "Not Found"
    });
});

module.exports = app;