'use strict';

const http = require('http').createServer();
const { db } = require('../../models/index.js');
const io = require('socket.io')(http, { pingInterval: 60000 });
const port = 3030;

http.listen(port, () => console.log(`Server listening on port: ${port}`));

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('message', (payload) => {
    console.log(payload);
    socket.broadcast.emit('message', payload);
  })
  socket.on('disconnect', (payload) => {
    console.log(`${payload} is offline`);
  })
});
