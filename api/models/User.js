const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema(
  {
    name: {
      type: String,
    },
    open_id: {
      type: String,
    },
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("User", User);
