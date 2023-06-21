const { Schema, model } = require('mongoose');

const geoSchema = Schema({

    type: {
        type: String
    },
    features: {
        type: Array
    }

});

module.exports = model( 'Geo', geoSchema );