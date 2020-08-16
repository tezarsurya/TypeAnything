const db = require("mongoose");

module.exports.postSchema = new db.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    formatted_title: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

module.exports.Post = db.model("posts", module.exports.postSchema);
