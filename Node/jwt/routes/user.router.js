const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/user.controller");

router.post("/", user_controller.user_add);
router.post("/login", user_controller.user_login);

module.exports = router;
