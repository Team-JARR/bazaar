'use strict';

const express = require('express');
const app = express();
const authRouter = require('./auth/routes.js')
const router = require('./routes/routes.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// add routes here
app.get('/', (req, res) => {
    res.status(201).send('Hello World!');
});

app.use(authRouter);
app.use(router);

module.exports = {
    server: app,
    start: (port) => {
        app.listen(port, () => {
            console.log(`Listening on ${port}`);
        });
    },
};