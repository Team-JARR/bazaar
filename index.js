const { db } = require('./src/data/index');
const app = require('./src/server');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  app.start(PORT);
});
