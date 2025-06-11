// const db = require("./db");
const { db, Cat, Owner } = require("./index");

const seed = async () => {
  await db.sync({ force: true }); // Drop and recreate tables
  await Cat.bulkCreate([
    { name: "Whiskers" },
    { name: "Fluffy" },
    { name: "Smokey" },
  ]);
  await Owner.bulkCreate([
    { name: "John Doe", email: "john@doe.com" },
    { name: "Jane Doe", email: "jane@doe.com" },
  ]);
  console.log("🌱 Seeded the database");
  db.close();
};

seed();
