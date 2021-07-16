const express = require("express");
const router = express.Router();

const planRouter = require("./plan");
const categoryRouter = require("./category");

router.use("/plan", planRouter);
router.use("/category", categoryRouter);

module.exports = router;
