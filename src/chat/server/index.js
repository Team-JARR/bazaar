'use strict';

const PORT = process.env.PORT || 3030;
const io = (require('socket.io')(PORT));
const messages = io.of('/messages');

console.log(`Socket.IO server started on port: ${PORT}.`);

io.on('connection', (socket) => {
  console.log('Socket is connected', socket.id);

  // socket methods only talk to a particular socket
  socket.on('message', (payload) => {
    // io methods talk to all sockets in the socket pool
    io.emit('received', {
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
