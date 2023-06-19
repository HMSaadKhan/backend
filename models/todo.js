const mongoose = require("mongoose");
const yup = require("yup");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Define the validation schema for Todo using Yup
const todoValidationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  completed: yup.boolean(),
  createdAt: yup.date(),
});

// Apply the validation middleware to the pre-save hook
todoSchema.pre("save", async function (next) {
  try {
    await todoValidationSchema.validate(this, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
