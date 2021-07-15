const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const planSchema = new Schema({
  name: String,
  planOwner: String,
  creationDate: Date,
  planDate: Date,
  address: String,
  price: Number,
  capacity: Number,
  comments: Array,
  description: String,
  recommendation: Number,
  users: Array,
  private: Boolean,
  free: Boolean,
  img: Array,
  category: String,
});

const Plan = model("plan", planSchema);

module.exports = Plan;
