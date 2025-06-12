const express = require("express");
const router = express.Router();
const catsRouter = require("./cats");
const ownersRouter = require("./owners");

router.use("/cats", catsRouter);
router.use("/owners", ownersRouter);

module.exports = router;
