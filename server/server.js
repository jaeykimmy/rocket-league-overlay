const { Pool } = require("pg");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const pool = new Pool({
  user: "jaeyoung",
  host: "localhost",
  database: "rocket_league_inventory",
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
  } else {
    console.log("Connected to the database.");
  }
});

app.get("/items", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM items");
    const items = result.rows;
    client.release();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve items." });
  }
});

app.get("/items/:id", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      `SELECT * FROM items WHERE id = ${req.params.id}`
    );
    const item = result.rows[0];
    client.release();
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve item." });
  }
});

app.patch("/items/:id", async (req, res) => {
  const id = req.params.id;
  const sold = req.body.sold;

  try {
    const client = await pool.connect();
    const result = await client.query("UPDATE items SET sold=$1 WHERE id=$2", [
      sold,
      id,
    ]);
    client.release();
    res.json({ message: "Item updated successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update item." });
  }
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
