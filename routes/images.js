const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const itemController = require("../controllers/imageController");

router.post("/", upload.single("image"), itemController.createItem);
router.get("/", itemController.getItems);
router.put("/:id", upload.single("image"), itemController.updateItem);
router.delete("/:id", itemController.deleteItem);

module.exports = router;
