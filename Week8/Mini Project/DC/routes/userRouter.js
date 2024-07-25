const express = require("express");
const router = express.Router();
const userControler = require("../controllers/userController.js");

router.post("/register", userControler.registerUser);
router.post("/login", userControler.loginUser);

router.get("/users", userControler.getAllUsers);
router.get("/users/:id", userControler.getUserById)

router.put("/users/:id", userControler.putUserById)

module.exports = router;
