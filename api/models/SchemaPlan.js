const { Schema, model, Mongoose } = require("mongoose");

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
  comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
  description: {
    type: String,
    required: false, //camiar dsp a true
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

planSchema.methods.average = function () {
  console.log(this.comments);
  let total = 0;
  this.comments.map((comment) => {
    total += parseInt(comment.valoracion);
  });
  let resultado = total / this.comments.length;
  this.recommendation = resultado;
};

const Plan = model("plan", planSchema);

module.exports = Plan;
