'use strict';

const {db} = require('../models/index')
const app = require('./server');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

db.sync().then(()=>{
  app.start(PORT)
})
