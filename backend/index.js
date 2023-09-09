const mongoose = require("mongoose");
const config = require("./config/config")

const URI = config.DB_URL
const port = process.env.PORT || 8080;

mongoose.set("strictQuery", true);
mongoose
.connect(URI+'?directConnection=true')
.then(() => {
    console.log("Connected to DB");
    const app = require('./app');
    app.listen(port, ()=>{
        console.log(`Server Running at port ${port}!`);
    })
})