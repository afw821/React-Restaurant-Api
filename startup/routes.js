const tables = require("../routes/tables");

module.exports = function (app) {
  app.use("/api/tables", tables);
};
