const express = require("express");
const router = express.Router();

const {
  getCategory,
  addCategory,
} = require("../controllers/categoryControllers");

// returns all the categories
router.get("/", getCategory);

// add a category
router.post("/", addCategory);

module.exports = router;
