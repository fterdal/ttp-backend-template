const { Sequelize } = require("sequelize");
const pg = require("pg");

const db = new Sequelize(
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URL
    : "postgres://localhost:5432/ttp_backend"
);

module.exports = db;
