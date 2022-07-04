const Todo = require("../model/Todo");

//get all todo tasks
exports.getAllTasks = async (req, res) => {
  try {
    let todos = await Todo.find();
    if (todos.length === 0)
      return res.status(404).json({
        success: false,
        message: "No Todos Found",
      });
    res.status(200).json({
      success: true,
      message: "Tasks found",
      todos,
      count: todos.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//get single todo task
exports.getSingleTask = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let todo = await Todo.findOne({ id });
    if (!todo)
      return res.status(404).json({
        success: false,
        message: "Task not found",
        todo,
      });
    res.status(200).json({
      success: true,
      message: "Task found",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// add task
exports.createTask = async (req, res) => {
  try {
    let todo = await req.body;
    let created = await Todo.create(todo);
    if (!created)
      return req.status(400).json({
        success: false,
        message: "Task creation failed",
      });
    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      todo: created,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//update todo task
exports.updateTask = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let todo = await req.body;
    let update = await Todo.findOneAndUpdate(id, todo, { new: true });

    if (!update)
      return res.status(400).json({
        success: false,
        message: "Task not updated",
      });

    return res.status(200).json({
      success: true,
      message: "Task updated",
      todo: update,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//delete todo task
exports.deleteTask = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let deleted = await Todo.findOneAndRemove(id);
    if (!deleted)
      return res.status(400).json({
        success: false,
        message: "Task not deleted",
      });

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully    ",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
