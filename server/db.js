const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const url="mongodb://localhost:27017/blog_app"
const uri = "mongodb+srv://Shashan_k08:Shashanktiwari123456@cluster0.ikfvhoz.mongodb.net/Bloglift?retryWrites=true&w=majority";
const dotenv = require("dotenv");

const connectToMongo =()=>{
    mongoose.connect(uri)
    .then( ()=>
        console.log("Connected to mongo Successful"))
    
}
module.exports = connectToMongo;