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
  getAllFriends,
  getContactsByQuery,
  getMyCategories,
  addFriend,
  removeFriend,
  addCategory,
  removeCategory,
} = require("../controllers/userControllers");

router.get("/me", authenticateJWT, getMe);

router.post("/login", loginUser);

router.post("/logout", authenticateJWT, logoutUser);
// returns all users
router.get("/", getUser);
//add a friend to a list
// get all contacts from a user
router.get("/getFriend", authenticateJWT, getAllFriends);
// get selected contacts from a search query
router.get("/search", authenticateJWT, getContactsByQuery);
// router.post("/add", authenticateJWT, addFriend);
router.get("/myCategories", authenticateJWT, getMyCategories);
// add plan to user
router.post("/planToAttend", authenticateJWT, addPlan);
// add friend to user
router.post("/friend", authenticateJWT, addFriend);
// add category to user
router.post("/category", authenticateJWT, addCategory);
// remove a plan from user
router.delete("/deletePlan/:id", authenticateJWT, removePlan);
// remove a plan from user (check if I can use a delete for this route)
router.post("/removeFriend", authenticateJWT, removeFriend);
// remove a plan from user (check if I can use a delete for this route)
router.post("/removeCategory", authenticateJWT, removeCategory);
// create a new user
router.post("/register", postUser);
// select user by id
router.get("/:id", getOneUser);
// update a user
router.put("/:id", authenticateJWT, updateUser);
// delete a user
router.delete("/:id", authenticateJWT, deleteUser);

module.exports = router;
