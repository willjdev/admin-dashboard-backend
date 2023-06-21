const { Schema, model } = require('mongoose');

const transactionSchema = ({
    mockTransactions: {
        type: Array
    }
});

module.exports = model( 'transactions', transactionSchema );