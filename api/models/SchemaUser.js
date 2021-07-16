const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

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

// Validacion de password

userSchema.methods.isValidPassword = function (password) {
  return bcrypt.compare(password, this.password).then((res) => res);
};

// Anadiendo un hook que me guarde el salt
userSchema.pre("save", function () {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      this.salt = salt;
      return bcrypt.hash(this.password, salt);
    })
    .then((hash) => {
      this.password = hash;
    });
});

const User = model("user", userSchema);

module.exports = User;
