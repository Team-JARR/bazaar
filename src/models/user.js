// User can create, update, delete their own listings
// User can get ALL listings (all users)
// Admin can update, delete all listings (all users)

'use strict';


/**
 * A persistence-agnostic user model.
 */
class User {
    userId;
    firstName;
    lastName;
    credentialHash;
}

/**
 * A base model we can use until we have figured out persistence deployment.
 */
class CommonDbModel {
    user;

    constructor(user) {
        this.user = user;
    }

    persist() { throw error('Cannot operate on base model.'); }
    restore() { throw error('Cannot operate on base model.'); }
    getModel() { throw error('Cannot operate on base model.'); }
}


const { Sequelize, DataTypes } = require('sequelize'); // sequelize dependency
class UserSequelizeModel extends CommonDbModel {
    #acl = {
        user: ['read'],
        admin: ['read', 'create', 'update', 'delete'],
    };

    dataTypes = DataTypes;
    sequelize = new Sequelize('sqlite::memory:'); // sqlite3 dependency
    user;

    constructor({user}){
        //this.user = user || new User();
         if (user) {
             this.user = user;
             return;
         }

         // create default model
         const defaultUser = new User();

         // todo: double-check this guid generation
         defaultUser.userId = new UUID();
    }

    persist() {
        // save to sequelize
    }

    restore() {
        // restore from sequelize

        //this.user = ...;
    }

    getModel() {
        const acl = this.#acl;

        return (sequelize, dataTypes) => {
            // db user table schema
            const userTable = sequelize.define('Users', {
                userId: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                firstName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                lastName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                credentialHash: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                role: {
                    type: DataTypes.VIRTUAL,
                    defaultValue: 'user',
                    allowNull: false,
                },
                token : {
                    type: DataTypes.VIRTUAL,
                    get() {
                        return acl[this.role];
                    }
                }
            });
        };
    }
}

class UserMongooseModel extends CommonDbModel {
    // todo: if we need it...
}

module.exports = {
    CommonDbModel,
    User,
    UserSequelizeModel,
    UserMongooseModel
}
