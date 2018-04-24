require('./config/config');


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const colors = require('colors');


const server = express();

mongoose.connect(DB_URL + DB_PORT + DB_COLLECTION, (err, res) => {
    if (err) throw err;
    console.log('BD: '.blue.bold, 'Online'.green.bold);
});

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(require('./routes/api'));

server.listen(process.env.PORT, () => {
    console.log('Server: '.blue.bold, 'PORT'.blue, '['.bold, colors.green(process.env.PORT), ']'.bold);
});