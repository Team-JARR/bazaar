'use strict';

const socketio = require('socket.io');
const PORT = process.env.PORT || 3030;
const index = socketio(PORT); // singleton
const messages = index.of('/messages');

console.log('Socket.IO server started.');

index.on('connection', (socket) => {
  console.log('Socket is connected', socket.id);

  // socket methods only talk to a particular socket
  socket.on('message', (payload) => {
    console.log(payload);

    // index methods talk to all sockets in the socket pool
    index.emit('received', {
      id: socket.id,
      payload
    });
  });
});

messages.on('connection', (socket) => {
  console.log(`${socket.id} connected to message server`);

  socket.on('join', (payload) => {
    socket.join(payload.roomname);
  });

  socket.on('message', (payload) => {
    messages.to(payload.room).emit(payload.message);
  });
});
