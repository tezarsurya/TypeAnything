const express = require("express");
const postsModel = require("../database/models/uneg_uneg");
const router = express.Router();
const formatTitle = require("../utils/format_title");

// get all posts
router.get("/posts", async (req, res) => {
  await postsModel.find({}, (err, post) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(post);
    }
  });
});

// insert post
router.post("/posts", async (req, res) => {
  const data = req.body;
  const formattedTitle = formatTitle(data.title);

  await postsModel.find(
    { formatted_title: formattedTitle },
    async (err, result) => {
      try {
        if (result.length === 0) {
          await postsModel.insertMany(
            {
              title: data.title,
              content: data.content,
              formatted_title: formattedTitle,
            },
            (err, inserted) => {
              try {
                res.status(200).json({
                  message: "Congratulations! Your writing has ben posted",
                });
              } catch {
                res.status(400).json(err);
              }
            }
          );
        } else {
          res.status(400).json({ message: "Sorry, title already exists" });
        }
      } catch {
        res.status(500).json(err);
      }
    }
  );
});

module.exports = router;
