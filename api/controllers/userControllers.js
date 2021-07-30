const { User, Plan } = require("../models/");
const jwt = require("jsonwebtoken");

const accessTokenSecret = "ceiboDigital";

//trae todos los usuarios
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
      if (!user.contacts.includes(userFriend.id)) {
        user.contacts = user.contacts.concat(userFriend.id);
        user.save();
      }
      return user;
    })
    .then((user) => res.status(201).send(user))
    .catch((err) => console.log(err));
};

const addPlan = (req, res, next) => {
  const { id } = req.user;
  const planId = req.body.id;
  const userPromise = User.findById(id);
  const planPromise = Plan.findById(planId);

  Promise.all([userPromise, planPromise])
    .then((values) => {
      const [user, plan] = values;
      user.myPlans = user.myPlans.concat(plan);
      plan.users = plan.users.concat(user);
      user.save();
      plan.save();
      res.status(200).send("Plan agregado");
    })
    .catch((err) => {
      next(err);
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

  User.create(user)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(409).send(err);
    });
};

const deleteUser = (req, res, next) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then((result) => {
      res.sendStatus(204).end();
    })
    .catch((error) => next(error));
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ msg: "Usuario no encontrado" });
  }
  const validate = await user.isValidPassword(password);

  if (!validate) {
    return res.status(401).json({ msg: "Password invalido" });
  }

  const token = jwt.sign({ id: user.id }, accessTokenSecret);

  return res.status(200).json({ token });
};

const getMe = (req, res, next) => {
  const { id } = req.user;

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
// router.post("/login", async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ where: { email } });

//   if (!user) {
//     return res.status(400).json({ msg: "Usuario no encontrado" });
//   }

//   const validate = await user.validatePassword(password);

//   if (!validate) {
//     return res.status(401).json({ msg: "Invalid credentials" });
//   }

//   const token = jwt.sign({ id: user.id }, "branchSecretP5");

//   return res.status(200).json({ token });
// });

const logoutUser = (req, res, next) => {
  const user = req.user;
  console.log("ESTAMOS EN LA RUTA DE LOGOUT", user);
  user = null;
  res.status(200).json({});
};

const removePlan = (req, res, next) => {
  const { id } = req.params;
  Plan.findByIdAndDelete(id)
    .then((result) => {
      res.sendStatus(204).end();
    })
    .catch((error) => next(error));
};


module.exports = {
  getUser,
  getOneUser,
  addFriend,
  postUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  getMe,
  addPlan,
  removePlan,
};
