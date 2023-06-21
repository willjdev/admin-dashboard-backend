/* 
    Data Routes
    /api/data
*/

const { Router } = require('express');
const { getGeo, getTeam, getContacts, getInvoices, getTransactions, getBar, getPie, getGeography } = require('../controllers/data');

const router = Router();


router.get( '/geo', getGeo );
router.get( '/team', getTeam );
router.get( '/contacts', getContacts );
router.get( '/invoices', getInvoices );
router.get( '/transactions', getTransactions );
router.get( '/bar', getBar );
router.get( '/pie', getPie );
router.get( '/geography', getGeography );


module.exports = router;