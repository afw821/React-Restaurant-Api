const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const tableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

tableSchema.plugin(AutoIncrement, { inc_field: "sequence" });

const TableList = mongoose.model("TableList", tableSchema);

module.exports = TableList;
