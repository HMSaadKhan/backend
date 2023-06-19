var express = require("express");
var router = express.Router();

const controllers = require("../../controllers/todo");

router.post("/todo", controllers.createTodo);
router.get("/todo", controllers.getTodo);
router.patch("/todo/:id", controllers.updateTodo);
router.delete("/todo/:id", controllers.deleteTodo);
router.get("/todo/:id", controllers.getTodoById);

module.exports = router;
