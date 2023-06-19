const express = require("express");
const { database } = require("./db");
const todoRoutes = require("./routes/api/todo");
const userRoutes = require("./routes/api/user");

const app = express();

const port = 3001;

app.use(express.json());

app.use("/api", todoRoutes);
app.use("/api", userRoutes);

database();

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
