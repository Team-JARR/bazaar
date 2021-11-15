'use strict';

const express = require('express');
const app = express();

// todo: auth imports here
// todo: model imports here

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// add routes here
app.post('/say-hello', (req, res) => {
    res.status(201).send('Hello!');
});

module.exports = {
    server: app,
    Start: (port) => {
        app.listen(port, () => {
            console.log(`server Up on ${port}`);
        });
    },
};