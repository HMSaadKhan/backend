const express = require("express");
const { database } = require("./db");
const todoRoutes = require("./routes/api/todo");

const app = express();

const port = 3001;

app.use(express.json());

app.use("/todo", todoRoutes);

database();

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
