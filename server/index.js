const express = require ('express');
const db =require('./db');
const app = express();
var cookieParser = require('cookie-parser')
var cors = require('cors')
 app.use(cors({credentials:true ,origin:'http://localhost:3001'}));
// app.post('/signup',(req,res)=>{
//     res.json('test ok');
// })
app.use(express.json());
app.use(cookieParser())

app.use('/api/auth',require('./routes/auth'));
app.use('/api/post',require('./routes/post'));
app.listen(5000)