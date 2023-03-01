const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const url="mongodb://localhost:27017/blog_app"

mongoose.connect(url,()=>{
    console.log("Connected")
}
 
)