const express = require("express");
const router = express.Router();

const gift_controller = require("../controllers/gift.controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/upload/gift");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get("/", gift_controller.gift_list);
router.get("/:id", gift_controller.gift_detail);
router.post("/", upload.single("picture"), gift_controller.gift_add);
// router.put("/:id", gift_controller.gift_update);
// router.delete("/:id", gift_controller.gift_delete);
module.exports = router;
