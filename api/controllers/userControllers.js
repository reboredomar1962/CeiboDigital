const { User } = require("../models/");

const getUser = (req, res, next) => {
  User.find({}).then((User) => {
    res.json(User);
  });
};

const getOneUser = (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      if (user.name) {
        return res.json(user);
      } else {
        res.status(404);
      }
    })
    .catch((err) => {
      next(err);
    });
};

const updateUser = (req, res, next) => {
  const { id } = req.params;
  const updateUser = req.body;

  User.findByIdAndUpdate(id, updateUser, { new: true }).then((user) => {
    res.json(user);
  });
};

const postUser = (req, res, next) => {
  const user = req.body;
  if (!user.name) {
    return res.status(400).json({ error: "required content field is missing" });
  }

  User.create(user).then((user) => res.status(201).send(user));
};

const deleteUser = (req, res, next) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then((result) => {
      res.sendStatus(204).end();
    })
    .catch((error) => next(error));
};

const loginUser = (req, res, next) => {};
const logoutUser = (req, res, next) => {};

module.exports = {
  getUser,
  getOneUser,
  postUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
};
