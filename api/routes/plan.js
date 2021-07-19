const express = require("express");
const router = express.Router();
const {authenticateJWT} = require ("./midlewares/auth")

const {
  getPlanes,
  getOnePlan,
  getPlansByCategory,
  postPlan,
  updatePlan,
  deletePlan,
} = require("../controllers/planControllers");

// returns all the plans
router.get("/", getPlanes);
// get all plans by category
router.get("/category/:category", getPlansByCategory);
// select a plan by id
router.get("/:id", getOnePlan);
// create a new plan
router.post("/", postPlan);
// update a plan
router.put("/:id", updatePlan);
// delete a plan
router.delete("/:id", deletePlan);

module.exports = router;
