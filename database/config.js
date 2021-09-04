const mongoose = require('mongoose');

//cadena de conexión original creada en mongo Compass 20210903EJBO
// 'mongodb://mean_user:dfSVgmm6ELOnznvK@cluster0-shard-00-01.kj6g6.mongodb.net:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

const dbConnection = async() => {
    try {
        // con la instancia del index.js se puede usar cors en este archivo
        // console.log( process.env );
        //
        //el string de conexión quedo de las forma mas corta permitiendo conectarce a mogno Atlas 20210903EJBO
        // await mongoose.connect('mongodb://mean_user:dfSVgmm6ELOnznvK@cluster0-shard-00-01.kj6g6.mongodb.net:27017/?ssl=true', {
        await mongoose.connect(process.env.DB_CNN, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        // salio un error en el servidor donde indica que el atributto useCreateIndex es deprecated
        // con los atributtos useNewUrlParser, useUnifiedTopology, se logra conectar pero en la página de Mongose indican que estan deprecadas y que por defecto bienen listas e indican no utilizarlas

        console.log("DB en línea...ok...");
        
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de iniciar la BD ver logs...");
    }
}

module.exports = {
    dbConnection
}