const express = require("express");
const { database } = require("./db");

const app = express();

database();

const port = 3001;

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
