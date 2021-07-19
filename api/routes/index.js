const express = require("express");
const router = express.Router();
const userRouter = require("./user");

const planRouter = require("./plan");
const categoryRouter = require("./category");

router.use("/plan", planRouter);
router.use("/category", categoryRouter);
router.use("/user", userRouter);

module.exports = router;
