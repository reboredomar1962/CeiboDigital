const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    //required: true,
  },
  age: {
    type: Number,
    //required: true,
  },
  img: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: String,
  contacts: [{ type: Schema.Types.ObjectId, ref: "user" }],
  myPlans: [{ type: Schema.Types.ObjectId, ref: "plan" }],
  categories: [{ type: Schema.Types.ObjectId, ref: "category" }],
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
