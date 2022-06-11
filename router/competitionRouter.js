const express = require("express");
const {
  createCompetition,
  getCompetitions,
  getCompetition,
  deleteCompetition,
  updateCompetition,
} = require("../contoller/competitionController.js");
const { imager } = require("../utils/multer");
const router = express.Router();

router.route("/all").get(getCompetitions);
router
  .route("/:id")
  .get(getCompetition)
  .patch(imager, updateCompetition)
  .delete(deleteCompetition);

router.route("/register").post(imager, createCompetition);

module.exports = router;
