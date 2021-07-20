const express = require("express");
const router = express.Router();
const userRouter = require("./user");

const planRouter = require("./plan");
const categoryRouter = require("./category");
const commentsRouter = require("./comments")

router.use("/plan", planRouter);
router.use("/category", categoryRouter);
router.use("/user", userRouter);
router.use("/comments", commentsRouter);


module.exports = router;
