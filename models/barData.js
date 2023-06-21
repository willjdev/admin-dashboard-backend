const { Schema, model } = require('mongoose');

const barSchema = ({
    mockBarData: {
        type: Array
    }
});

module.exports = model( 'bar', barSchema );