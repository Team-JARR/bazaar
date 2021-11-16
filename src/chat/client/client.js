'use strict';

let socket = require('socket.io-client')('http://localhost:3030');
const repl = require('repl');
const chalk = require('chalk');
let username = null;


socket.on('connect', () => {
  console.log(chalk.green('=== begin chat! ==='));
  username = process.argv[2];
});

socket.on('message', (data) => {
  const { message, username } = data;
  console.log(chalk.blue(username + ': ' + message.split('\n')[0]));
});

socket.on('disconnect', function () {
  socket.emit('disconnect', username);
  console.log('----------------->', username);
});

repl.start({
  prompt: '',
  eval: (message) => {
    socket.send({ username, message })
  }
});
