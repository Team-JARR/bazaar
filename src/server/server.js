'use strict';

const express = require('express');
const app = express();
const authRouter = require('..auth/routes.js')

// auth imports here

// model imports
const { Profile } = require('../models/profile');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// add routes here
app.post('/say-hello', (req, res) => {
    res.status(201).send('Hello!');
});

// app.post('/signup', (req, res) => {
//     const profile = new Profile();

//     profile.firstName = 'Joe';
//     profile.lastName = 'Mama';
//     profile.credentialHash = 'my-cool-hash';

//     res.status(201).send(profile);
// });


module.exports = {
    server: app,
    Start: (port) => {
        app.listen(port, () => {
            console.log(`Listening on ${port}`);
        });
    },
};