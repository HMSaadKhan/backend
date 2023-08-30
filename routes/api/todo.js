var express = require("express");
var router = express.Router();

const controllers = require("../../controllers/todo");
const middleware = require("../../middleware/authentication");

router.post("/todo", controllers.createTodo);
router.get("/todo", controllers.getTodo);
router.patch("/todo/:id", controllers.updateTodo);
router.delete("/todo/:id", controllers.deleteTodo);
router.get("/todo/:id", controllers.getTodoById);
router.get(
  "/user-todo/",
  middleware.authenticateMiddleware,
  controllers.getTodoById
);

module.exports = router;
