const express = require("express");
const router = express.Router();
const { Owner, Cat } = require("../database");

// GET /api/owners - Get all owners
router.get("/", async (req, res, next) => {
  console.log("owners GET / API");
  const owners = await Owner.findAll({
    include: [Cat],
  });
  res.json(owners);
});

// GET /api/owners/:id - Get a single owner
router.get("/:id", async (req, res, next) => {
  const owner = await Owner.findByPk(req.params.id, {
    include: [Cat],
  });
  if (!owner) {
    res.status(404).json({ error: "Owner not found" });
    return;
  }
  res.json(owner);
});

// POST /api/owners - Create a new owner
router.post("/", async (req, res, next) => {
  const { name, email } = req.body;
  const owner = await Owner.create({ name, email });
  res.status(201).json(owner);
});

module.exports = router;
