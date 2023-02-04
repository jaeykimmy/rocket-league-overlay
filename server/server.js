const express = require("express");
const app = express();
const data = require("./data");
const cors = require("cors");

app.use(cors());
const items = data.items;

app.get("/", (req, res) => {
  res.send(items);
});

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
