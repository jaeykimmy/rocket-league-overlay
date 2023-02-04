const express = require("express");
const app = express();
const { products } = require("@rocketleagueapi/items");
const data = [
  {
    name: "fennec",
    price: 1600,
    color: "titanium white",
  },
  {
    name: "sparkles",
    price: 100,
    color: "none",
  },
  {
    name: "invader",
    price: 200,
    color: "black",
  },
  {
    name: "raijin",
    price: 100,
    color: "lime",
  },
  {
    name: "honda civic type r",
    price: 250,
    color: "titanium white",
  },
  {
    name: "honda civic type r le",
    price: 150,
    color: "grey",
  },
  {
    name: "maestro",
    price: 100,
    color: "gold",
  },
  {
    name: "hot rod",
    price: 600,
    color: "black",
  },
  {
    name: "hot rod",
    price: 600,
    color: "titanium white",
  },
  {
    name: "phoenix fire",
    price: 150,
    color: "black",
  },
];
app.get("/", (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
