const { Sequelize } = require("sequelize");
const pg = require("pg");
require("dotenv").config();

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/ttp_backend"
);

module.exports = db;
