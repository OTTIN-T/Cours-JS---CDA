const express = require("express");
const router = express.Router();

const gif_controller = require("../controller/gift.controller");

router.get("/", gif_controller.list_gift);
router.get("/:id", gif_controller.get_gift);
router.get("/search/:search", gif_controller.search_gift);
router.post("/", gif_controller.add_gift);
router.delete("/:id", gif_controller.delete_gift);
router.put("/:id", gif_controller.edit_gift);
module.exports = router;
