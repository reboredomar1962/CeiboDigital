const { Comments, User } = require("../models/");

// get planes
const getComments = (req, res, next) => {
    Comments.find({}).then((comments) => {
    res.json(comments);
  });
};


// post plan
const postComments = (req, res, next) => {
  const comment = req.body;

  if (!comment.comentario) {
    return res.status(400).json({
      error: "required content field is missing",
    });
  }

  const newComment = new Comments(comment);

  newComment.save().then((comment) => {
    res.json(comment);
  });
};


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
    getComments,
    postComments,
    deleteComments,
};