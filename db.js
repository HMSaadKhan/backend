// db.js

const mongoose = require("mongoose");

const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://saad_barki:dpbnHYxhr3FiN8eZ@practice.ogmcucx.mongodb.net/?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
});

module.exports = { database };
