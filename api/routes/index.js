const express = require('express')
const router = express.Router();

const planRouter = require('./plan')


router.use("/plan", planRouter)


module.exports = router;