const { Schema, model } = require("mongoose");

const planSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  planOwner: String, //setear el usuario logueado al crear el plan
  creationDate: {
    type: Date,
    required: true,
  }, // setear el date actual al crear el plan
  planDate: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  capacity: {
    type: Number,
    default: null,
  },
  comments: Array,
  description: {
    type: String,
    required: true,
  },
  recommendation: Number,
  users: [{ type: Schema.Types.ObjectId, ref: "user" }],
  private: {
    type: Boolean,
    required: true,
  },
  free: {
    type: Boolean,
    required: true,
  },
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
