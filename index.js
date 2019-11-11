const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static("./"))
app.get("/", (req, res) => {
  res.send(fs.readFileSync("./index.html", "UTF-8"));
});
app.listen(3000);