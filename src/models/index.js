'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const users = require('../auth/models/users');
const listingModel = require('./listing');

const sequelize = new Sequelize('sqlite:memory:');

const listing = listingModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: users(sequelize, DataTypes),
  listing,
};
