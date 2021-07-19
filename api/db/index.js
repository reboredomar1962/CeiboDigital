const mongoose = require("mongoose");
mongoose
  .set("useCreateIndex", true)
  .connect("mongodb://localhost:27017/ceiboDigital", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;
module.exports = db;
