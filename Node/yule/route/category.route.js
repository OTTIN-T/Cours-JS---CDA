const express = require("express");
const router = express.Router();

const category_controller = require("../controller/category.controller");

router.get("/", category_controller.list_category);
router.get("/:id", category_controller.get_category);
router.get("/:id/yules", category_controller.list_category_yule);
router.post("/", category_controller.add_category);
router.delete("/:id", category_controller.delete_category);
router.put("/:id", category_controller.edit_category);
module.exports = router;
