const { Sequelize, DataTypes } = require("sequelize");
const users = require("./users");
const listingModel = require("./listing");

const DATABASE_URL = process.env.DATABASE_URL || "sqlite:memory:";
const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  db: sequelize,
  users: users(sequelize, DataTypes),
  listing: listingModel(sequelize, DataTypes),
};
