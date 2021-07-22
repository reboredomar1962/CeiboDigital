const { Comments, User } = require("../models/");

// delete plan
const deleteComments = (req, res, next) => {
  const { id } = req.params;
  Comments.findByIdAndDelete(id)
    .then((result) => {
      res.sendStatus(204).end();
    })
    .catch((error) => next(error));
};

module.exports = {
  deleteComments,
};
