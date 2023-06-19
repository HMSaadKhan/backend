const Todo = require("../models/todo");

module.exports.createTodo = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { title, description, completed } = req.body;
    const todo = new Todo({
      title,
      description,
      completed,
      userId: userId,
    });
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to create todo" });
  }
};

module.exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};
module.exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you pass the todo ID in the request URL
    const todos = await Todo.findById(id);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

module.exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you pass the todo ID in the request URL
    const { title, description, completed } = req.body;

    // Find the todo by ID and update its properties
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true } // Return the updated todo in the response
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ error: "Failed to update todo" });
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you pass the todo ID in the request URL

    // Find the todo by ID and remove it
    const deletedTodo = await Todo.findByIdAndRemove(id);

    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete todo" });
  }
};

module.exports.getTodoByUserId = async (req, res) => {
  try {
    const userId = req.user.userId; // Assuming the decoded user ID is available in the `req.user` object after authentication

    // Fetch todos by user ID
    const todos = await Todo.find({ userId });

    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};
