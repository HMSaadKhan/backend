var express = require("express");
var router = express.Router();

const controller = require("../../controllers/user");

// POST /users - Create a new user
router.post("/signup", controller.createUser);

// POST /login - User login
router.post("/login", controller.loginUser);

module.exports = router;
