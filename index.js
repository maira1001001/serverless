const express = require("express");

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

app.listen(port, () => {
  console.log("Escuchando en el puerto " + port);
});
