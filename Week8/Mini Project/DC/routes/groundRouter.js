const express = require("express");
const multer = require("multer");
const router = express.Router();
const groundControler = require("../controllers/groundController.js");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/grounds", groundControler.getAllGrounds);
router.get("/grounds/name", groundControler.getGroundByName);
router.post("/grounds", upload.single('image'), groundControler.createGround);


/**
 * Add something to modify grounds ? 
 */

module.exports = router;
