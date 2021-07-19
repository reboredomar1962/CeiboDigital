const { Schema, model } = require("mongoose");

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

// remplazamos el _id por id y sacamos el __V en el JSON
planSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Plan = model("plan", planSchema);

module.exports = Plan;
