/**
 PORTS: 3000 for server, 3001 for client
 */

'use strict';

require('dotenv').config();
const app = require('./src/server/server.js');




app.start(process.env.PORT || 3001);