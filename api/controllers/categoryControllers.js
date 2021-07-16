const { Category } = require("../models");

const getCategory = (req, res, next) => {
  Category.find({}).then((category) => res.json(category));
};

const addCategory = (req, res, next) => {
  const category = req.body;
  if (!category) {
    return res.status(400).json({ error: "required content field is missing" });
  }

  Category.create(category).then((category) => res.status(201).send(category));
};

module.exports = { getCategory, addCategory };
