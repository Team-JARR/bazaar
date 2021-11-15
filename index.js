/**
 PORTS: 3000 for server, 3001 for client
 */

'use strict';

require('dotenv').config();
const app = require('./src/server.js');




app.Start(process.env.PORT || 3001);