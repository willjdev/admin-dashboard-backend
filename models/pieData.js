const { Schema, model } = require('mongoose');

const pieSchema = ({
    mockPieData: {
        type: Array
    }
});

module.exports = model( 'pie', pieSchema );