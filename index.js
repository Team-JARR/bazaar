'use strict';

const {db} = require('./src/models/index')
const app = require('./src/server');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

db.sync().then(()=>{
  app.start(PORT)
})
