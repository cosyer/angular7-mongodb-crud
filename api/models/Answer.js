const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Answer = new Schema(
  {
    title: {
      type: String,
    },
    question_id: {
      type: String,
    },
    is_right: {
      type: Number,
    },
  },
  {
    collection: "answer",
  }
);

module.exports = mongoose.model("Answer", Answer);
