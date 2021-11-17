const { Sequelize, DataTypes } = require('sequelize');
const users = require('./users');
const listingModel = require('./listing');

const CONNECTIONSTRING = process.env.DATABASE_URL || 'sqlite:memory:';
const sequelize = new Sequelize(CONNECTIONSTRING);

module.exports = {
  db: sequelize,
  users: users(sequelize, DataTypes),
  listing: listingModel(sequelize, DataTypes),
};
