const { mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  dueDate: {
    type: String,
    require: true,
  },
  piority: {
    type: String,
    default: "Normal",
    require: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
