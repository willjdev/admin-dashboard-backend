const express = require('express');
const { dbConnection } = require('./db/config');
const cors = require('cors');
require('dotenv').config();



// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use( cors() );

// Directorio publico
app.use( express.static('public') );


// Lectura y parseo del body
app.use( express.json() );


// Rutas
app.use( '/api/auth', require('./routes/auth') );
app.use( '/api/data', require('./routes/data') );

app.use( '*', (req, res) => {
    res.sendFile( __dirname + '/public/index.html')
})


// Listener
app.listen( process.env.PORT, () => {
    console.log(`Server on port ${ process.env.PORT }`)
})