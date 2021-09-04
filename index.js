require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//crear el servidor de express
const appServer = express();

//configurar CORS
appServer.use(cors());

//base de datos
dbConnection();

// console.log( process.env );
// console.log( process.env.PORT );

// var puerto = 3000;
var puerto = process.env.PORT;

// USUARIOS
//usuario adm mongodb: dbUser
//pass mongodb: 2F5eoDpu37Hu3rvo
//usuario rw mongodb: mean_user
//pass mongodb: dfSVgmm6ELOnznvK


//CONEXION with mongoDb compass --> retorna: queryTxt ETIMEOUT cluster0.kj6g6.mongodb.net 
// mongodb+srv://<username>:<password>@cluster0.kj6g6.mongodb.net/hospitaldb
// mongodb+srv://mean_user:dfSVgmm6ELOnznvK@cluster0.kj6g6.mongodb.net/hospitaldb
// usuario rw mongodb: mean_user
// pass mongodb: dfSVgmm6ELOnznvK
//
// CONEXION esta funciono OK 20210831
// se creo utilizando la opciòn "Fill"
// mongodb://mean_user:dfSVgmm6ELOnznvK@cluster0-shard-00-01.kj6g6.mongodb.net:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=true

appServer.get('/', (request, response) => {
    response.status(400).json({
        ok: true,
        msg: 'Hola Eduardo'
    });
    // response.json({
    //     ok: true,
    //     msg: 'Hola Eduardo'
    // });
});
appServer.listen( puerto, () => {
    console.log("Servidor corriendo en puerto " + puerto);
})