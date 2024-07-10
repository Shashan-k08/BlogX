const express = require('express');
const Post = require('../models/Post');
var jwt = require('jsonwebtoken');
const {  validationResult } = require('express-validator');
const { body } = require('express-validator');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' })
var cookieParser = require('cookie-parser')
const privateKey = "jhagsfsakdgfduy";

router.post('/newpost', upload.single('file'), async (req, res) => {
    const {originalname,path}= req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newpath= path+'.'+ext;
    fs.renameSync(path,newpath);
    try {
        // const err = validationResult(req);
        // if (err) throw err
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        const postdoc = await Post.create(
            {
                title: req.body.title,
                summary: req.body.summary,
                content: req.body.content,
                cover:newpath,
            }
        )
        res.json(postdoc);
       // console.log(postdoc)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
    // res.json({file:req.file})
    
}

)

router.get('/fetchpost',
    async (req, res) => {
        res.json(await Post.find());
    }
);
module.exports = router