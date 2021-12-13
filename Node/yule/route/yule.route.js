const express = require("express");
const router = express.Router();

const yule_controller = require("../controller/yule.controller");

router.get("/", yule_controller.list_yule);
router.get("/:id", yule_controller.get_yule);
router.post("/", yule_controller.add_yule);
router.delete("/:id", yule_controller.delete_yule);
router.put("/:id", yule_controller.edit_yule);
module.exports = router;
