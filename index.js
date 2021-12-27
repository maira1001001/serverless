const express = require("express");
const { sequelize } = require("./models");

const port = 3000;
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router.post();
// router.get();

app.get("/health", (req, res) => {
  res.json({ name: "testing serverless" });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(port, () => {
  console.log("Escuchando en el puerto " + port);
});
