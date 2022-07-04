const express = require("express");
const { json } = require("express");
const connect = require("./config/database");

connect()

const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.send("Zuri training on Mongodb")
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
