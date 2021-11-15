'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const users = require('../auth/models/users');

const sequelize = new Sequelize('sqlite:memory:');

module.exports = {
  db: sequelize,
  Users: users(sequelize, DataTypes),
};
