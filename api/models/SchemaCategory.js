const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  type: String,
  img: String,
});

categorySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Category = model("category", categorySchema);

module.exports = Category;
