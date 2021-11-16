'use strict';

const PORT = process.env.CHATPORT || 3030;
const io = require('socket.io-client');
const socket = io(`http://localhost:${PORT}/messages`);

// publish

socket.emit('hello-world',{payload: 'message'});
