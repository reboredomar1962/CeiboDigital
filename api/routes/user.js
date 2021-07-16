const express = require("express");
const router = express.Router();

const {
  getUser,
  getOneUser,
  postUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
} = require("../controllers/userControllers");

router.post("/login", loginUser);

router.post("/logout", logoutUser);
// returns all the plans
router.get("/", getUser);
// select a plan by id
router.get("/:id", getOneUser);
// create a new plan
router.post("/register", postUser);
// update a plan
router.put("/:id", updateUser);
// delete a plan
router.delete("/:id", deleteUser);

module.exports = router;
