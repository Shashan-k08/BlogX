const express = require('express');
const User = require('../models/User');
var jwt = require('jsonwebtoken');
const { body,validationResult  } = require('express-validator');
const router = express.Router();
var cookieParser = require('cookie-parser')
const privateKey="jhagsfsakdgfduy";
router.post('/signup',

  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password must be of at least 5 charactors').isLength({ min: 5 })
  ],
  async (req, res) => {
    // let user = await User.findOne();
    console.log(req.body.name)

    let user = await User.create({
      name: req.body.username,
      password: req.body.password
    });

    const data = {
      user: {
        id: user.id
      }
    }
    res.json(user);
  }
)

router.post('/login',
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password must be of at least 5 charactors').isLength({ min: 5 })
  ],
  async (req, res) => {

    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const passok = user.password;
    if (passok) {
      jwt.sign({ username,id:user._id }, privateKey, { }, (err,token)=> {
        if(err)throw err;
        res.cookie('token',token).json({
          id:user._id,
          username,
        });
      });
    }
  }
)

router.get('/profile',
(req,res)=>{
  const {token}= req.cookies;
  jwt.verify(token,privateKey,{},(err,info)=>{
    if(err) throw err
    res.json(info);
    })
  res.json(req.cookies);
}
)
router.post('/logout',
  (req,res)=>{
    res.cookie('token','').json('ok');
  }
)

module.exports = router