'use strict';

const PORT = process.env.CHATPORT || 3030;
const io = require('socket.io-client');
const socket = io(`http://localhost:${PORT}/messages`);

// publish
socket.join('message');
socket.emit({payload: 'message'}, 'hello world');
socket.emit({payload: 'message'}, 'hello world');
