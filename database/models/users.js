const db = require("mongoose");
const { postSchema } = require("./posts");

const userSchema = new db.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [postSchema],
  },
  { timestamps: true }
);

module.exports = db.model("users", userSchema);
