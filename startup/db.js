const mongoose = require("mongoose");
const AutoIncrementFactory = require("mongoose-sequence");
const config = require("config");
require("dotenv").config();

module.exports = async function () {
  const isDbProd = config.get("db_production");
  console.log("is db prod", isDbProd);
  if (process.env.DB_URI) {
    console.log("-----------------IFF-------------------");
    var connection = await mongoose.connect(process.env.DB_URI);
  } else {
    console.log("-------------else--------------");
    var connection = await mongoose.connect(
      "mongodb://localhost/react-restaurant-API",
      { useNewUrlParser: true }
    );
  }

  const AutoIncrement = AutoIncrementFactory(connection);
  console.log("--------CONNECTION----------------", connection);
  if (connection) console.log("Connected to MongoDB://React-Restaurant-API");
  else console.log("Error connecting to MongoDB");
};
