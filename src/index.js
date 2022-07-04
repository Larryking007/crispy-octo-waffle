const express = require("express");
const { json } = require("express");
const connect = require("./config/database");
const todoRoute = require("./router/todoRoute");

connect()

const app = express();
app.use(json());
app.use("/todo", todoRoute);

app.get("/", (req, res) => {
  res.send("Zuri training on Mongodb")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
