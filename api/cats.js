const express = require("express");
const router = express.Router();
const Cat = require("../db/cat");

// GET all cats
router.get("/", async (req, res) => {
  const cats = await Cat.findAll();
  res.json(cats);
});

// GET a single cat by id
router.get("/:id", async (req, res) => {
  const cat = await Cat.findByPk(req.params.id);
  res.json(cat);
});

module.exports = router;
