const express = require("express");
const multer = require("multer");
const router = express.Router();
const groundControler = require("../controllers/groundController.js");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/grounds", groundControler.getAllGrounds);
router.get("/grounds/name", groundControler.getGroundByName);
router.post("/grounds", upload.single('image'), groundControler.createGround);
router.get('/grounds/:url', groundControler.getGroundByUrl);


module.exports = router;


/**
 * Add something to modify grounds ? 
 */


