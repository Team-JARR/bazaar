// User can create, update, delete their own listings
// User can get ALL listings (all users)
// Admin can update, delete all listings (all users)

'use strict';


class Profile {
    firstName;
    lastName;
    credentialHash;
}

class CommonDbModel {
    profile;

    constructor(profile) {
        this.profile = profile;
    }

    persist() {
        // write the model to sequelize
    }

    restore() {
        // read the model from sequelize
    }

    getModel() {
        return this.profile;
    }
}

const { Sequelize, DataTypes } = require('sequelize'); // sequelize dependency
const sequelize = new Sequelize('sqlite::memory:'); // sqlite3 dependency

class ProfileSequelizeModel extends CommonDbModel {
    profile;

    constructor(profile){
        this.profile = profile;
    }

    persist() {
    }

    restore() {
    }

    getModel(sequelize, DataTypes) {
        return (sequelize, DataTypes) => {

        };
    }
}

class ProfileMongooseModel extends CommonDbModel {
    // todo: if we need it...
}

module.exports = {
    CommonDbModel,
    Profile,
    ProfileSequelizeModel,
    ProfileMongooseModel
}
