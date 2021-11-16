'use strict';

const PORT = process.env.CHATPORT || 3030;
const io = require('socket.io-client');
const socket = io(`http://localhost:${PORT}/messages`);

// subscribe
// socket.on('connect', () => console.log('connected to server'));
function messageHi(){
  let payload = {
    name: 'lol',
    msg: 'hello boi!!!!'
  }
  socket.emit('hello', payload);
}
messageHi();
setInterval(messageHi, 2000);