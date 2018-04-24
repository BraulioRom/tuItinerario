const mongoose = require('mongoose');
const Place = require('../models/place');

let saveData = async(data) => {
    let ex = await Place.find().where({ 'data.id': data.id }).exec();
    if (ex.length > 0) return { ok: false, message: 'The document already exist' };
    let place = new Place();
    place.data = data;
    place.markModified('data');
    place.save();
    return { ok: true, message: 'Data saved' };
};

module.exports = {
    saveData,
};