const express = require("express");
const router = express.Router();

const matter_controller = require("../controller/matter.controller");

router.get("/", matter_controller.list_matter);
router.get("/:id", matter_controller.get_matter);
router.get("/search/:search", matter_controller.search_matter);
router.post("/", matter_controller.add_matter);
router.delete("/:id", matter_controller.delete_matter);
router.put("/:id", matter_controller.edit_matter);
module.exports = router;
