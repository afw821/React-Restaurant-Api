const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const waitListSchema = new mongoose.Schema({
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

waitListSchema.plugin(AutoIncrement, { inc_field: "WaitOrder" });

const WaitList = mongoose.model("WaitList", waitListSchema);

module.exports = WaitList;
