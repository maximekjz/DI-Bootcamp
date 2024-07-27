const express = require("express");
const router = express.Router();
const likeControler = require("../controllers/likeController.js");

router.post("/like", likeControler.addLike);

router.get("/like/:userid", likeControler.getLikes);

router.delete("/like", likeControler.removeLike)

module.exports = router;
