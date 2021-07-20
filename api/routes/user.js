const express = require("express");
const router = express.Router();

const {
  getUser,
  addFriend,
  getOneUser,
  postUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
} = require("../controllers/userControllers");

router.post("/login", loginUser);

router.post("/logout", logoutUser);
// returns all users
router.get("/", getUser);
//add a friend to a list
router.post("/add", addFriend);
// select user by id
router.get("/:id", getOneUser);
// create a new user
router.post("/register", postUser);
// update a user
router.put("/:id", updateUser);
// delete a user
router.delete("/:id", deleteUser);

module.exports = router;
