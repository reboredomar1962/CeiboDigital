const express = require("express");
const router = express.Router();
const { authenticateJWT } = require("./midlewares/auth");

const {
  getUser,
  getOneUser,
  postUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  getMe,
  addPlan,
  removePlan,
  addFriend,
  removeFriend,
} = require("../controllers/userControllers");

router.get("/me", authenticateJWT, getMe);

router.post("/login", loginUser);

router.post("/logout", authenticateJWT, logoutUser);
// returns all users
router.get("/", getUser);
//add a friend to a list
// router.post("/add", authenticateJWT, addFriend);
// add plan to user
router.post("/planToAttend", authenticateJWT, addPlan);
// add friend to user
router.post("/friend", authenticateJWT, addFriend);
// remove a plan from user
router.delete("/deletePlan/:id", authenticateJWT, removePlan);
// remove a plan from user
router.delete("/removeFriend", authenticateJWT, removeFriend);
// create a new user
router.post("/register", postUser);
// select user by id
router.get("/:id", getOneUser);
// update a user
router.put("/:id", authenticateJWT, updateUser);
// delete a user
router.delete("/:id", authenticateJWT, deleteUser);

module.exports = router;
