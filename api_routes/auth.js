const express = require("express");
const router = express.Router();
const User = require("../database/models/users");
const { Post } = require("../database/models/posts");

router.post("/insert_user", async (req, res) => {
  const data = req.body;
  await User.find({ email: data.email }, async (err, result) => {
    try {
      if (result.length === 0) {
        const newUser = new User(data);
        await newUser.save({ validateBeforeSave: true }, (err, result) => {
          try {
            res.status(200).json(result);
          } catch {
            res.status(400).json(err);
          }
        });
      } else {
        res.status(400).json({ message: "that e-mail is already taken" });
      }
    } catch {
      res.status(500).json(err);
    }
  });
});

router.post("/insert_post", async (req, res) => {
  const data = req.body;
  await User.find({ email: data.email }, async (err, result) => {
    try {
      if (result.length === 0) {
        res.json({ message: "no users found" });
      } else {
        result[result.length - 1].posts.push({
          title: data.title,
          content: data.content,
          formatted_title: data.formatted_title,
        });
        await User.updateOne(
          { email: data.email },
          result[result.length - 1].posts
        );
        res.json(result[result.length - 1]);
      }
    } catch {
      res.json(err);
    }
  });
});

module.exports = router;
