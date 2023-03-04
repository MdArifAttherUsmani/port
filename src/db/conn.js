const mongoose = require("mongoose")

// connection creation and create in a new db
// mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/portfolio", { useNewUrlParser: true })
.then(()=>{
    console.log("connection successfully")
}).catch((e)=>{
    console.log(e)
})