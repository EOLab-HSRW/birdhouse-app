const mongoose = require("mongoose");
const config = require("./config/config")

const URI = config.DB_URL
const port = process.env.PORT || 5000;

mongoose
.connect(URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to DB");
    const app = require('./app');
    app.listen(port, ()=>{
        console.log(`Server Running at port ${port}!`);
    })
})