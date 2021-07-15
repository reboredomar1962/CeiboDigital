const express = require("express");
const app = express();
const PORT = 3001;
const db = require("./db/index");
const Plan = require("./models/SchemaPlan");

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

// const eventTest = new Plan({
//   name: "eventTest3",
// });

// eventTest.save((err) => {
//   if (err) return console.error(err);
//   console.log("guardado!");
// });

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
  app.listen(PORT, () => {
    console.log(`server running on  http://localhost:${PORT}`);
  });
});
