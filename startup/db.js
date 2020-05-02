const mongoose = require("mongoose");
const AutoIncrementFactory = require("mongoose-sequence");

module.exports = async function () {
  if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
    const AutoIncrement = AutoIncrementFactory(connection);
  } else {
    const connection = await mongoose.connect(
      "mongodb://localhost/react-restaurant-API",
      { useNewUrlParser: true }
    );

    const AutoIncrement = AutoIncrementFactory(connection);

    if (connection) console.log("Connected to MongoDB://React-Restaurant-API");
    else console.log("Error connecting to MongoDB");
  }
};
