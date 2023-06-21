const { Schema, model } = require('mongoose');

const invoiceSchema = ({
    mockDataInvoices: {
        type: Array
    }
});

module.exports = model( 'invoices', invoiceSchema );