const express = require("express");
const router = express.Router();
const commentControler = require("../controllers/commentController.js");

router.post("/comment", commentControler.addComment);

router.get("/comment/:userid", commentControler.getComments);

router.delete("/comment", commentControler.removeComment)

module.exports = router;
