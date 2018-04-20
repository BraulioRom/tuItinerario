require('./config/config');


const express = require('express');


const server = express();

server.get('/', (req, res) => {
    res.json('Hola papu')
});

server.listen(process.env.PORT, () => {
    console.log("Server running in : ", process.env.PORT);
});