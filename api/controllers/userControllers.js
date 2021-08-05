const { User, Plan, Category } = require("../models/");
const jwt = require("jsonwebtoken");

const accessTokenSecret = "ceiboDigital";

//trae todos los contactos del usuario deseado
const getUser = (req, res, next) => {
  User.find({})
    .populate("contacts", { name: 1, lastName: 1, age: 1, img: 1, email: 1 })
    .sort({ name: "asc" })
    .then((users) => {
      res.json(users);
    });
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
      res.status(200).send(user.myPlans);
    })
    .catch((err) => {
      next(err);
    });
};

const getOneUser = (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .populate("plan", {
      name: 1,
      price: 1,
      capacity: 1,
      address: 1,
    })
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
  console.log("Validate -> ", validate);

  if (!validate) {
    return res.status(401).json({ msg: "Password invalido" });
  }

  const token = jwt.sign({ id: user.id }, accessTokenSecret);

  return res.status(200).json({ token });
};

const getMe = (req, res, next) => {
  const { id } = req.user;

  User.findById(id)
    .populate("myPlans", {
      name: 1,
      creationDate: 1,
      planDate: 1,
      address: 1,
      price: 1,
      img: 1,
    })

    .populate("categories", {
      type: 1,
      id: 1,
    })

    .populate("contacts", {
      name: 1,
      lastName: 1,
      email: 1,
    })

    .then((user) => {
      console.log("user->", user);
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
  console.log("LLEGUE A LA RUTAAASA !!!!! ");
  const { id } = req.user;
  const idPlan = req.params.id;

  const userPromise = User.findById(id);
  const planPromise = Plan.findById(idPlan);

  Promise.all([userPromise, planPromise])
    .then((values) => {
      const [user, plan] = values;
      console.log("Antes Plan", plan.users);
      console.log("Antes user", user.myPlans);
      user.myPlans = user.myPlans.filter((planId) => planId != idPlan);
      plan.users = plan.users.filter((user) => user != id);
      user.save();
      plan.save();

      console.log("Despues Plan", plan.users);
      console.log("Despues user", user.myPlans);
      res.status(200).send("plan eliminado");
    })
    .catch((err) => {
      next(err);
    });
};

const getAllFriends = (req, res, next) => {
  const { id } = req.user;
  console.log("este es el id de getAllFriend", id);
  User.findById(id)
    .populate("contacts", { name: 1, lastName: 1, age: 1, img: 1, email: 1 })
    .then((result) => {
      console.log("este es el res.data de getAllFriends", result);
      return res.status(200).send(result);
    })
    .catch((err) => {
      next(err);
    });
};

const addFriend = (req, res, next) => {
  const { id } = req.user;
  const friendId = req.body.id;
  const userPromise = User.findById(id);
  const friendPromise = User.findById(friendId);
  console.log("este es el friendId", friendId);
  console.log("este es el id", id);
  console.log("este es el boyd", req.body);
  Promise.all([userPromise, friendPromise])
    .then((values) => {
      const [user, friend] = values;
      console.log("este es el friend", friend);
      user.contacts = user.contacts.concat(friend);
      user.save();
      res.status(201).send(user.contacts);
    })
    .catch((err) => {
      next(err);
    });
};

const removeFriend = (req, res, next) => {
  const { id } = req.user;
  const idFriend = req.body.id;

  const userPromise = User.findById(id);
  const friendPromise = User.findById(idFriend);

  Promise.all([userPromise, friendPromise])
    .then((values) => {
      const [user, friend] = values;
      user.contacts = user.contacts.filter((friendId) => friendId != idFriend);
      user.save();
      res.status(200).send("amigo eliminado");
      console.log("user", user);
      console.log("friend", friend);
    })
    .catch((err) => {
      next(err);
    });
};

const addCategory = (req, res, next) => {
  const { id } = req.user;
  const categoryId = req.body.id;
  const userPromise = User.findById(id);
  const categoryPromise = Category.findById(categoryId);
  console.log("ESTO ES CATEGORY ID EN EL BACK----->", categoryId);
  console.log("ESTO ES REQ.BODY EN EL BACK----->", req.body);

  Promise.all([userPromise, categoryPromise])
    .then((values) => {
      const [user, category] = values;
      user.categories = user.categories.concat(category);
      user.save();
      res.status(200).send("categoria agregada");
    })
    .catch((err) => {
      next(err);
    });
};

const removeCategory = (req, res, next) => {
  const { id } = req.user;
  const categoryId = req.body.id;
  const userPromise = User.findById(id);
  const categoryPromise = Category.findById(categoryId);

  Promise.all([userPromise, categoryPromise])
    .then((values) => {
      const [user, category] = values;
      console.log("user y category", user, category);
      user.categories = user.categories.filter(
        (category) => category != categoryId
      );
      user.save();
      res.status(200).send("categoria eliminada");
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getUser,
  getOneUser,
  postUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  getMe,
  addPlan,
  removePlan,
  getAllFriends,
  addFriend,
  removeFriend,
  addCategory,
  removeCategory,
};
