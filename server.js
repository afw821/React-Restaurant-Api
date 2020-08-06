const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const config = require("config");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build"))); //for react-app
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
//startup
require("./startup/db")();
require("./startup/routes")(app);

//for react-app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || config.get("port");
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
