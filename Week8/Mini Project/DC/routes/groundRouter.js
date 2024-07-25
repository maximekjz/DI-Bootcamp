const express = require("express");
const router = express.Router();
const groundControler = require("../controllers/groundController.js");

router.get("/grounds", groundControler.getAllGrounds);
router.get("/grounds/name", groundControler.getGroundByName)

/**
 * Add something to modify grounds ? 
 */

module.exports = router;
