const { Pool } = require("pg");

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
