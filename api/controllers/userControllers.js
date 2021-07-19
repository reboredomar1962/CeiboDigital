const { User } = require("../models/");

const getUser = (req, res, next) => {
  User.find({})
    .populate("contacts", { name: 1, lastName: 1, age: 1, img: 1, email: 1 })
    .then((users) => {
      res.json(users);
    });
};

const addFriend = (req, res, next) => {
  //tengo la info del usuario loggeado. Como llega desde el front?
  const loggedUser = {
    contacts: [],
    myPlans: [],
    categories: [],
    name: "marti",
    lastName: "rebo",
    age: 19,
    img: "vnjgvo",
    email: "mar@mar.com",
    password: "$2b$16$N.pGRb2hb3yh0DgrV4PBL.jYUTNDgQXvK5JyEfASjayaTmuUhvcUO",
    salt: "$2b$16$N.pGRb2hb3yh0DgrV4PBL.",
    id: "60f5c3a7e0cd0625e37f5382",
  }; //ver de donde sacar el logged user

  // que informacion nos llega desde el front al momento de 
  // no se que nos va a pasar el apretar boton
  const userFriend = {
    contacts: [],
    myPlans: [],
    categories: [],
    name: "alejandro",
    lastName: "ro",
    age: 31,
    img: "lala",
    email: "lala@lala.com",
    password: "$2b$16$6FRF5AeFJ2PesLiBbmt2leTnOnTIQXFPv2.YdxNYU0VwJUGbEnBFW",
    salt: "$2b$16$6FRF5AeFJ2PesLiBbmt2le",
    id: "60f5c383e0cd0625e37f5380",
  };

  User.findById(loggedUser.id)
    .then((user) => {
      //console.log("contactos", user.contacts);
      if (!user.contacts.includes(userFriend.id)) {
        user.contacts = user.contacts.concat(userFriend.id);
        user.save();
      }
      return user;
    })
    .then((user) => res.status(201).send(user))
    .catch((err) => console.log(err));
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

const loginUser = (req, res, next) => {
  // test para funcionar en el validPassword
  // const { name, password } = req.body;
  // User.findOne({ name }).then((user) => {
  //   console.log(user.isValidPassword(password));
  // });
};
const logoutUser = (req, res, next) => {};

module.exports = {
  getUser,
  getOneUser,
  addFriend,
  postUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
};
