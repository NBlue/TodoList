const Todo = require("../models/Todo");

const todoController = {
  addTodo: async (req, res) => {
    try {
      const newTodo = new Todo(req.body);
      const todo = await newTodo.save();

      return res.status(200).json({
        success: true,
        message: "Add Todo Successfully!",
        todo,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error,
      });
    }
  },

  getTodos: async (req, res) => {
    try {
      const todos = await Todo.find({});

      return res.status(200).json({
        success: true,
        message: "Get Todos Successfully!",
        todos,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error,
      });
    }
  },

  getTodoById: async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);

      return res.status(200).json({
        success: true,
        message: "Get Todo Successfully!",
        todo,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error,
      });
    }
  },

  updateTodoById: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.status(200).json({
        success: true,
        message: "Update Todo Successfully!",
        todo,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error,
      });
    }
  },

  deleteTodoById: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndDelete(req.params.id);

      return res.status(200).json({
        success: true,
        message: "Delete Todo Successfully!",
        todo,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error,
      });
    }
  },
};

module.exports = todoController;
