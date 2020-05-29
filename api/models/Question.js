const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Question = new Schema(
  {
    title: {
      type: String,
    },
    user_id: {
      type: String,
    },
    tag: {
      type: Number,
    },
  },
  {
    collection: "question",
  }
);

module.exports = mongoose.model("Question", Question);
