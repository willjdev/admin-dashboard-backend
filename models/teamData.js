const { Schema, model } = require('mongoose');

const teamSchema = ({
    mockDataTeam: {
        type: Array
    }
});

module.exports = model( 'team', teamSchema );