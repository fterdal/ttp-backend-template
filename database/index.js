const db = require("./db");
const Cat = require("./cat");
const Owner = require("./owner");

// Set up associations
Cat.belongsTo(Owner);
Owner.hasMany(Cat);

// Export everything needed
module.exports = {
  db,
  Cat,
  Owner,
};
