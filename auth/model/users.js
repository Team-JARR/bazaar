'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'lololol';

const userModel = (sequelize, DataTypes)=> {
  const model = sequelize.define('Users', {
    username: {type: DataTypes.STRING, allowNull: true, unique : true},
    password: {type: DataTypes.STRING, allowNull: true},
    role: {type: DataTypes.ENUM('user','admin'), allowNull: true, defaultValue: 'user'},
    token: {
      type: DataTypes.VIRTUAL,
      get(){
        return jwt.sign({username: this.username}, SECRET);
      },
      set(tokenObj){
        let token = jwt.sign(tokenObj, SECRET);
        return token;
      },
      capabilities: {
        type: DataTypes. VIRTUAL,
        get(){
          const acl ={
            user = ['read'],
            admin = ['read','create', 'update', 'delete']
          }
          return acl [this.role];
        }
      }
    }
  })
}