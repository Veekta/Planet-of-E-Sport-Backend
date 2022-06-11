const express = require("express");
const router = express.Router();
const { imager } = require("../utils/multer");
const { uploader } = require("../utils/multer");
const {
  getAllUsers,
  getSingleUser,
  createPlayer,
} = require("../contoller/playerController");

router.route("/");

router.route("/:id/register").post(uploader, createPlayer);
router.route("/:id/players").get(getAllUsers);
router.route("/:id/players/playerId").get(getSingleUser);

module.exports = router;
