const mongoose = require("mongoose");
const AutoIncrementFactory = require("mongoose-sequence");
const config = require("config");
require("dotenv").config();

module.exports = async function () {
  const isDbProd = config.get("db_production");
  console.log("is db prod", isDbProd);
  if (isDbProd) {
    console.log("-----------------IFF-------------------");
    var connection = await mongoose.connect(
      `mongodb+srv://afw821:${process.env.DB_PASSWORD}@alexdb-tdxtv.mongodb.net/heroku_v5swwtl2?retryWrites=true&w=majority`,
      { useNewUrlParser: true }
    );
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
