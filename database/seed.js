const db = require("./db");
const Cat = require("./cat");

const seed = async () => {
  await db.sync({ force: true }); // Drop and recreate tables
  await Cat.bulkCreate([
    { name: "Whiskers" },
    { name: "Fluffy" },
    { name: "Smokey" },
  ]);
  console.log("🌱 Seeded the database");
  db.close();
};

seed();
