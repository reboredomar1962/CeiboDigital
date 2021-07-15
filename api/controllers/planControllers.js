
const { Plan } = require("../models/");

// get planes
const getPlanes = (req, res, next) => {
    Plan.find({}).then(planes => {
        res.json(planes)
    })
};

// get one plan by id
const getOnePlan = (req, res, next) => {};

// post plan
const postPlan = (req, res, next) => {};

// update plan
const updatePlan = (req, res, next) => {};

// delete plan
const deletePlan = (req, res, next) => {};

module.exports = {
  getPlanes,
  getOnePlan,
  postPlan,
  updatePlan,
  deletePlan,
};
