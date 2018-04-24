const express = require('express');
const { Extraction } = require('../providers/Facebook');
const { saveData } = require('../providers/Mongoose')
const Place = require('../models/place');
const colors = require('colors');


const routes = express();


routes.post('/', (req, res) => {
    let body = req.body

    Extraction(body.id)
        .then(data => {
            saveData(data).then(ok => {
                res.json(ok);
                console.log('Server: '.blue.bold, 'Mongoose'.blue, '['.bold, colors.green.bold(ok.message), ']'.bold);
            }).catch(e => {
                res.status(500).json({
                    ok: false,
                    message: 'Data not saved'
                });
                console.log('Server: '.blue.bold, 'Mongoose'.blue, '['.bold, colors.red.bold(e), ']'.bold);
            });
        })
        .catch(error => {
            if (error.code == 190) console.log('Server: '.blue.bold, 'Api graph'.blue, '['.bold, 'Token expired'.red.bold, ']'.bold);
            res.status(503).json({
                ok: false,
                error: error.message
            });
        });
});




module.exports = routes;