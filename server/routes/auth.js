const express = require('express');
const User = require('../models/User');
var jwt = require('jsonwebtoken');
const { body,validationResult  } = require('express-validator');
const router = express.Router();
const JWT_SECRET = "shhhh";
var cookieParser = require('cookie-parser')
const privateKey="jhagsfsakdgfduy";
router.post('/signup',

  [
    body('username', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password must be of at least 5 charactors').isLength({ min: 5 })
  ],
  async (req, res) => {
    let success=false;
    // if there are errors then check error and rwturn bad request and that error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    // check weather user with this email already exist
    try {


      let user = await User.findOne({ name:req.body.username });
      console.log(user);
      if (user) {
        return res.status(400).json({ success, error: "Sorry a user with this name already exist" })
      }

      user = await User.create({
        name: req.body.username,
        password: req.body.password,
      });

      const data = {
        user: {
          id: user.id
        }
      }
      const verificationtoken = jwt.sign(data, JWT_SECRET);

      // .then(user => res.json(user))
      // .catch(err=>{console.log(err)
      // res.json({error:'Please enter a unique value for email'})})
   success=true;
      res.json({success,verificationtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
)

router.post('/login',
  [
    body('username', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password must be of at least 5 charactors').isLength({ min: 5 })
  ],
  async (req, res) => {
    let success=false;
    // if there are errors then check error and rwturn bad request and that error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {

      let user = await User.findOne({ username });
      if (!user) {
        success=false
        return res.status(400).json({ error: "Please try login with correct crendentials" });
      }

      if (!password) {
        success=false
        return res.status(400).json({success, error: "Please try login with correct crendentials" });

      }

      const data = {
        user: {
          id: user.id
        }
      }
      const verificationtoken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, verificationtoken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
)

router.get('/profile', async (req,res)=>{
 const userdata= await User.findOne({user:req.user.id});
 res.json(userdata);
}
)
router.post('/logout',
  (req,res)=>{
    res.cookie('token','').json('ok');
  }
)

module.exports = router