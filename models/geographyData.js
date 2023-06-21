const { Schema, model } = require('mongoose');

const geographySchema = ({
    mockGeographyData: {
        type: Array
    }
});

module.exports = model( 'geography', geographySchema );