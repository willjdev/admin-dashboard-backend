const { Schema, model } = require('mongoose');

const contactsSchema = ({
    mockDataContacts: {
        type: Array
    }
});

module.exports = model( 'contacts', contactsSchema );