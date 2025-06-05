const db = require("./db");

const Cat = db.define("cat", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Cat;
