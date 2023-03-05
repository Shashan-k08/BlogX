const express = require('express');
const Post = require('../models/Post');
const fetchuser = require('../middleware/fetchuser');
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
const upload = multer({ dest: 'uploads/' })
var cookieParser = require('cookie-parser')
const privateKey = "jhagsfsakdgfduy";

router.post('/newpost', fetchuser,
[
    body('title', 'Enter a valid title').isLength({ min:5 }),
    body('summary', 'Enter a valid summary').isLength({min:5}),
   ],
    async (req, res) => {
        try {
            // const err = validationResult(req);
            // if (err) throw err
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(400).json({success, errors: errors.array() });
            }
            const postdoc = await Post.create(
                {
                    title:req.body.title,
                    summary:req.body.summary,
                    content:req.body.content
                }
            )
            res.json(postdoc);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }

    })




router.get('/fetchpost',
    async (req, res) => {
        res.json(await Post.find());
    }
);
module.exports = router