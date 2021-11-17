'use strict';

const PORT = process.env.CHATPORT || 3030;
const socket = require('socket.io-client')(`http://localhost:${PORT}`);
const repl = require('repl');
const chalk = require('chalk');
const username = process.argv[2] || 'guest';
const role = process.argv[3] || 'buyer';
const listingId = process.argv[4] || '4321';

socket.on('connect', () => {
  console.log(chalk.green('=== begin chat! ==='));
  socket.emit('auth', {username, role, listingId});
});

socket.on('message', (data) => {
  const {message} = data;
  console.log(chalk.blue(username + ': ' + message.split('\n')[0]));
});

socket.on('disconnect', function () {
  socket.emit('disconnect', {username});
  console.log('----------------->', username);
});

repl.start({
  prompt: '',
  eval: (message) => {
    socket.send({username, message});
  }
});
