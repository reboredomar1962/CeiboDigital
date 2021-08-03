const { model, Schema } = require("mongoose");

const commentsSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  comentario: {
    type: String,
    required: true,
  },
  valoracion: {
    type: String,
    enum: ["1", "2", "3", "4", "5"],
    required: true,
  },
  planId: String,
});

commentsSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Comments = model("comments", commentsSchema);

module.exports = Comments;
