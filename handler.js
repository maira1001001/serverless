const express = require("express");
const { sequelize } = require("./models");
const serverless = require("serverless-http");

const port = 3000;
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router.post();
// router.get();

app.get("/health", (req, res) => {
  sequelize
    .authenticate()
    .then(() => {
      res.json({
        status: "Connection to database has been established successfully.",
      });
    })
    .catch((err) => {
      res.json({ status: "Unable to connect", error: err });
    });
});

module.exports.handler = serverless(app);
