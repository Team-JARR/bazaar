'use strict';

require('dotenv').config();
const app = require('./src/server.js');




app.Start(process.env.PORT || 3001);