const express = require('express');
const Post= require('../models/Post');
var jwt = require('jsonwebtoken');
const { body } = require('express-validator');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' })
var cookieParser = require('cookie-parser')
const privateKey="jhagsfsakdgfduy";

router.post('/newpost',upload.single('file'),async (req,res)=>{
    const {originalname,path}= req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newpath= path+'.'+ext;
    fs.renameSync(path,newpath);
    const {token}= req.cookies;
    jwt.verify(token,privateKey,{},async (err,info)=>{
      if(err) throw err
      const {title,summary,content} = req.body;
      const postdoc= await Post.create(
           {
               title,
               summary,
               content,
               cover:newpath,
               author:info.id,
           }
       )
      // res.json(postdoc);
     // res.json(info);
      })
    res.json(req.cookies);
   

    // res.json({file:req.file})
}

)

router.get('/fetchpost',
async (req,res)=>{
res.json(await Post.find());
}
);
module.exports = router