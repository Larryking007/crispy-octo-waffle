const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    description: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    isCompleted: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const todoModel = model("todos", todoSchema);

module.exports = todoModel;
