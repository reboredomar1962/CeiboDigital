const { Plan } = require("../models/");

// get planes
const getPlanes = (req, res, next) => {
  Plan.find({}).then((planes) => {
    res.json(planes);
  });
};

// get one plan by id
const getOnePlan = (req, res, next) => {
  const { id } = req.params;
  Plan.findById(id)
    .then((plan) => {
      if (plan) {
        return res.json(plan);
      } else {
        res.status(404);
      }
    })
    .catch((err) => {
      next(err);
    });
};

// Find all plans by category
const getPlansByCategory = (req, res, next) => {
  const { category } = req.params;
  Plan.find({ category: category })
    .then((allPlans) => {
      if (allPlans) {
        return res.json(allPlans);
      } else {
        res.status(404);
      }
    })
    .catch((err) => {
      next(err);
    });
};

// get all plans that match a search input
const getPlanByQuery = (req, res, next) => {
  // OJO para que coincida con el key que viene desde el front
  const { name } = req.query;

  Plan.find({ name: { $regex: name, $options: "i" } })
    .then((search) => {
      console.log(search);
      if (!search) res.status(404);
      res.status(200).json(search);
    })
    .catch((err) => console.log(err));
};

// post plan
const postPlan = (req, res, next) => {
  const plan = req.body;

  if (!plan.name) {
    return res.status(400).json({
      error: "required content field is missing",
    });
  }

  const newPlan = new Plan(plan);

  newPlan.save().then((plan) => {
    res.json(plan);
  });
};

// update plan
const updatePlan = (req, res, next) => {
  const { id } = req.params;
  const updatePlan = req.body;

  Plan.findByIdAndUpdate(id, updatePlan, { new: true }).then((plan) => {
    res.json(plan);
  });
};

// delete plan
const deletePlan = (req, res, next) => {
  const { id } = req.params;
  Plan.findByIdAndDelete(id)
    .then((result) => {
      res.sendStatus(204).end();
    })
    .catch((error) => next(error));
};

module.exports = {
  getPlanes,
  getOnePlan,
  getPlansByCategory,
  getPlanByQuery,
  postPlan,
  updatePlan,
  deletePlan,
};
