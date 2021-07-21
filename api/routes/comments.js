const express = require("express");

const router = express.Router();

const { deleteComments } = require("../controllers/commentsController");

// returns all the plans

// create a new plan

// delete a plan
router.delete("/:id", deleteComments);

module.exports = router;
