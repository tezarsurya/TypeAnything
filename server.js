const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const db = require("mongoose");
const postsRoute = require("./api_routes/posts");
const authRoute = require("./api_routes/auth");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  // database connection
  db.connect(
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Database Connected");
      }
    }
  );

  // middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", postsRoute);
  app.use("/api", authRoute);

  // all frontend routes
  app.get(`*`, (req, res) => {
    return handle(req, res);
  });

  // listen port
  app.listen(port, () => console.log(`Listening to port ${port}`));
});
