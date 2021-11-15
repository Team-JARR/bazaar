// User can create, update, delete their own listings
// User can get ALL listings (all users)
// Admin can update, delete all listings (all users)

'use strict';


/**
 * A persistence-agnostic profile model.
 */
class User {
    profileId;
    firstName;
    lastName;
    credentialHash;
}

/**
 * A base model we can use until we have figured out persistence deployment.
 */
class CommonDbModel {
    profile;

    constructor(profile) {
        this.profile = profile;
    }

    persist() { throw error('Cannot operate on base model.'); }
    restore() { throw error('Cannot operate on base model.'); }
    getModel() { throw error('Cannot operate on base model.'); }
}


const { Sequelize, DataTypes } = require('sequelize'); // sequelize dependency
class ProfileSequelizeModel extends CommonDbModel {
    dataTypes = DataTypes;
    sequelize = new Sequelize('sqlite::memory:'); // sqlite3 dependency

    profile;

    constructor({profile}){
        this.profile = profile || new User();
    }

    persist() {
        // save to sequelize
    }

    restore() {
        // restore from sequelize

        this.profile = ...;
    }

    getModel() {
        return (sequelize, dataTypes) => {

        };
    }
}

class ProfileMongooseModel extends CommonDbModel {
    // todo: if we need it...
}

module.exports = {
    CommonDbModel,
    Profile: User,
    ProfileSequelizeModel,
    ProfileMongooseModel
}
