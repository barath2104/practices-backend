const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router.get("/", controller.GetUser);
router.post("/", controller.createUser);

module.exports = router;
