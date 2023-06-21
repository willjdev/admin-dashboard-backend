const { response } = require('express');
const Geo = require('../models/objectGeo');
const Team = require('../models/teamData');
const Contacts = require('../models/contactsData');
const Invoice = require('../models/invoicesData');
const Transaction = require('../models/transactionsData');
const Bar = require('../models/barData');
const Pie = require('../models/pieData');
const Geography = require('../models/geographyData');

const getGeo = async ( req, res = response ) => {
    
    try {
        const geoData = await Geo.find();
        res.json({
            ok: true,
            msg: 'Geo datos cargados',
            geoData
        });
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener data Geo');
    }
    
    
};
 
const getTeam = async ( req, res = response) => {
    
    try {
        const team = await Team.find();
        res.json({
            ok: true,
            msg: 'Team datos cargados',
            team
        })
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener datos Team');
    }
    
    
    
};

const getContacts = async ( req, res = response ) => {
    
    try {
        const contact = await Contacts.find();
        res.json({
            ok: true,
            msg: 'Contacts datos cargados',
            contact
        })
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener datos Contacts');
    }
};

const getInvoices = async ( req, res = response ) => {

    try {
        const invoice = await Invoice.find();
        res.json({
            ok: true,
            msg: 'Invoices datos cargados',
            invoice
        })
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener datos Invoices')
    }

};

const getTransactions = async ( req, res = response ) => {

    try {
        const transaction = await Transaction.find();
        res.json({
            ok: true,
            msg: 'Transactions datos cargados',
            transaction
        })
    } catch (error) {
        console.log(error);
        throw new Error('Erro al obtener datos Transactions')
    }

};

const getBar = async ( req, res = response ) => {

    try {
        const bar = await Bar.find();
        res.json({
            ok: true,
            msg: 'Bar datos cargados',
            bar
        })
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener datos Bar')
    }

};

const getPie = async ( req, res = response ) => {

    try {
        const pie = await Pie.find();
        res.json({
            ok: true,
            msg: 'Pie datos cargados',
            pie
        })
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener datos Pie')
    }

};

const getGeography = async ( req, res = response ) => {

    try {
        const geography = await Geography.find();
        res.json({
            ok: true, 
            msg: 'Geography datos cargados',
            geography
        })
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener datos Geography')
    }
    
};

module.exports = {
    getBar,
    getContacts,
    getGeo,
    getGeography,
    getInvoices,
    getPie,
    getTeam,
    getTransactions,
}