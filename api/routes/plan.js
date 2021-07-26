const express = require("express");
const router = express.Router();
const { authenticateJWT } = require("./midlewares/auth");

const {
  getPlanes,
  getOnePlan,
  getPlansByCategory,
  getPlanByFilters,
  getPlanByQuery,
  postPlan,
  updatePlan,
  deletePlan,
  getComments,
  postComments,
} = require("../controllers/planControllers");

// returns all the plans
router.get("/", /* authenticateJWT, */ getPlanes);
// get all plans by category
router.get("/category/:category", getPlansByCategory);
// get all plans that match a several inputs
router.get("/search/multipleFilter", getPlanByFilters);
// get all plans that match a search input
router.get("/search", getPlanByQuery);
// get all comments from plan
router.get("/:id/comments", getComments);
// select a plan by id
router.get("/:id", getOnePlan);
// create a new plan
router.post("/", authenticateJWT, postPlan);
// create new comments
router.post("/:id/comments", authenticateJWT, postComments);
// update a plan
router.put("/:id", authenticateJWT, updatePlan);
// delete a plan
router.delete("/:id", authenticateJWT, deletePlan);

module.exports = router;
