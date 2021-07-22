const { Plan, Comments, User } = require("../models/");

// get planes
const getPlanes = (req, res, next) => {
  Plan.find({})
    .then((planes) => {
      console.log('ESTO ES PLANES EN CONTROLLERS',planes)
      res.json(planes);
    });
};

// get one plan by id
const getOnePlan = (req, res, next) => {
  const { id } = req.params;
  Plan.findById(id)
    .populate("comments", { userId: 1, valoracion: 1, comentario: 1 })
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
      if (!search) res.status(404);
      res.status(200).json(search);
    })
    .catch((err) => res.status(400).send(err));
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

// get planes
const getComments = (req, res, next) => {
  Comments.find({}).then((comments) => {
    res.json(comments);
  });
};

// post plan
const postComments = (req, res, next) => {
  const { comentario, valoracion } = req.body;
  const planId = req.params.id;
  const { id } = req.user;

  if (!comentario) {
    return res.status(400).json({
      error: "required content field is missing",
    });
  }

  const userPromise = User.findById(id);
  const planPromise = Plan.findById(planId);

  Promise.all([userPromise, planPromise]).then((values) => {
    const [user, plan] = values;

    const newComment = new Comments({
      userId: user,
      valoracion,
      comentario,
    });
    /// PREGUNTAR A GUS
    newComment.save().then((comment) => {
      plan.comments = plan.comments.concat(comment);
      plan.save();
      res.json(comment);
    });
  });
};

module.exports = {
  getPlanes,
  getOnePlan,
  getPlansByCategory,
  getPlanByQuery,
  postPlan,
  updatePlan,
  deletePlan,
  getComments,
  postComments,
};
