const express = require("express");
const router = express.Router();

const {
    getPlanes,
	getOnePlan,
	postPlan,
	updatePlan,
	deletePlan,
} = require("../controllers/planControllers");



// returns all the plans
router.get("/", getPlanes);
// select a plan by id
router.get("/:planId", getOnePlan);
// create a new plan
router.post("/", postPlan);
// update a plan
router.put("/:id", updatePlan);
// delete a plan
router.delete("/:id", deletePlan);

module.exports = router;