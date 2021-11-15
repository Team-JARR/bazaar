'use strict';

const db = require('../models/index')
const start = require('./server');
require.resolve('dotenv').config();
const PORT = process.env.PORT || 3000;

db.sync().then(()=>{
  app.start(process.env.PORT || 3000)
})
