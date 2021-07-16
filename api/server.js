const express = require("express");
const app = express();
const PORT = 3001;
const db = require("./db/index");
const volleyball = require("volleyball");
const routes = require("./routes");
const { Plan } = require("./models");

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

app.use(express.json());
app.use(volleyball);

app.use("/api", routes);

app.use((error, req, res, next) => {
  console.log(error);
  if ((error.name = "castError")) {
    res.status(400).end();
  } else {
    res.status(500).end();
  }
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
  app.listen(PORT, () => {
    console.log(`server running on  http://localhost:${PORT}`);
  });
});
