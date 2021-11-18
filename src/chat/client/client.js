const PORT = process.env.CHATPORT || 3030;
const socket = require('socket.io-client')(`http://localhost:${PORT}`);
const repl = require('repl');
const figlet = require('figlet');
const chalk = require('chalk');

const username = process.argv[2] || 'guest';
const role = process.argv[3] || 'buyer';
const listingId = process.argv[4] || '4321';

socket.on('connect', () => {
  console.log(chalk.green('Connected.'));
  socket.emit('auth', { username, role, listingId });

  figlet('begin chat!', {
    font: 'Italic',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true,
  }, (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
    }
    console.log(chalk.blue(data));
  });
});

socket.on('message', (data) => {
  const { message } = data;
  console.log(chalk.blue(`${username}: ${message.split('\n')[0]}`));
});

socket.on('disconnect', () => {
  socket.emit('disconnect', { username });
  console.log('----------------->', username);
});

repl.start({
  prompt: '',
  eval: (message) => {
    socket.send({ username, message });
  },
});
