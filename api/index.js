const express = require("express");
const router = express.Router();
const catsRouter = require("./cats");

router.use("/cats", catsRouter);

module.exports = router;
