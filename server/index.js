const express = require ('express');
const connectToMongo =require('./db');
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
var cookieParser = require('cookie-parser')
var cors = require('cors')
connectToMongo();
 app.use(cors({credentials:true ,origin:'http://localhost:3000'}));
// app.post('/signup',(req,res)=>{
//     res.json('test ok');
// })
app.use(express.json());

app.use(cookieParser())

app.use('/api/auth',require('./routes/auth'));
app.use('/api/post',require('./routes/post'));
app.listen(5000)