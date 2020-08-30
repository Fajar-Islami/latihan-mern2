const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.index);
router.post("/", UserController.create);
router.get("/:id", UserController.detail);
router.delete("/:id", UserController.destroy);

module.exports = router;
