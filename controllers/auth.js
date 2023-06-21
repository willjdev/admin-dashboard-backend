const { response } = require('express');
const mockData = require('../mockData/mockData');
const Contact = require('../models/contactsData');
const Team =  require('../models/teamData');
const Invoice =  require('../models/invoicesData');
const Transaction = require('../models/transactionsData');
const Bar = require('../models/barData');
const Pie = require('../models/pieData');
const Geography = require('../models/geographyData');

const loginUser = ( req, res = response ) => {

    const { name, email } = req.body;


    res.json({
        ok: true,
        msg: 'Login de usuario',
        name,
        email
    })
};

const createMockData = async ( req, res = response ) => {

    const contact = new Contact( mockData );
    const team =  new Team( mockData );
    const invoice =  new Invoice( mockData );
    const transaction =  new Transaction( mockData );
    const bar = new Bar( mockData );
    const pie = new Pie( mockData );
    const geography = new Geography( mockData );


    try {
        
        await geography.save();
        //await team.save();
        console.log('Guardado');

    } catch (error) {
        console.log( error );
        throw new Error('No se guardo en base de datos');
    }


}


module.exports = {
    createMockData,
    loginUser, 
}