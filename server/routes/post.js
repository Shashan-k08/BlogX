const express = require("express");
const Post = require("../models/Post");
var jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { body } = require("express-validator");
const router = express.Router();
const upload = require("../middleware/multer.middleware");
var cookieParser = require("cookie-parser");
const privateKey = "jhagsfsakdgfduy";
const  uploadOnCloudniary = require("../utils/cloudinary");
router.post("/newpost", upload.single("file"), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const coverLocalpath = req.file.path;

    if (!coverLocalpath) {
      return res.status(500).send("Cover Image not found");
    }
    console.log(coverLocalpath);
    const coverImage = await uploadOnCloudniary(coverLocalpath);
    if (!coverImage) {
      return res.status(500).send("Image not uploaded");
    }

    const postdoc = await Post.create({
      title: req.body.title,
      summary: req.body.summary,
      content: req.body.content,
      cover: coverImage.url,
    });
    res.json(postdoc);
    console.log(postdoc);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server errorrr");
  }
  // res.json({file:req.file})
});

router.get("/fetchpost", async (req, res) => {
  res.json(await Post.find());
});
module.exports = router;
