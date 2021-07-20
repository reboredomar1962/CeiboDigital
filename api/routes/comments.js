const express = require("express");
const router = express.Router();

const {
  getComments,
  postComments,
  deleteComments,
} = require("../controllers/commentsController");

// returns all the plans
router.get("/", getComments);

// create a new plan
router.post("/", postComments);

// delete a plan
router.delete("/:id", deleteComments);

module.exports = router;