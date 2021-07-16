const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,
  lastName: String,
  age: Number,
  img: String,
  email: String,
  password: String,
  salt: String,
  contacts: Array,
  myPlans: Array, //ver
  preferences: Array,
});

// remplazamos el _id por id y sacamos el __V en el JSON
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = model("user", userSchema);

module.exports = User;
