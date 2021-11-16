'use strict';

const PORT = process.env.CHATPORT || 3030;
const socketio = require('socket.io');
const io = socketio(PORT);
const server = io.of('/messages');

console.log(`Socket.IO server started on port: ${PORT}.`);

server.on('connection', (socket) => {
  console.log('Socket is connected------->', socket.id);
  socket.on('hello', payload =>{
    console.log(payload);
  } )

  socket.on('hello-world', payload =>{
    console.log(payload);
  })

})
