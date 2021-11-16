'use strict';

const PORT = process.env.CHATPORT || 3030;
const io = require('socket.io-client');
const socket = io(`http://localhost:${PORT}/messages`);

// subscribe
socket.join('message');
socket.on('connect', () => console.log('connected to server'));
socket.on('message', ({payload}) => console.log('november 15, 2021'));
