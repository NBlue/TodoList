const todoController = require("../controllers/todo");

const router = require("express").Router();

router.delete("/:id", todoController.deleteTodoById);
router.put("/:id", todoController.updateTodoById);
router.post("/", todoController.addTodo);
router.get("/:id", todoController.getTodoById);
router.get("/", todoController.getTodos);

module.exports = router;
