const mongoose = require('mongoose');

let Schema = mongoose.Schema;

var placeSchema = new Schema({ data: Object });


module.exports = mongoose.model('Place', placeSchema);