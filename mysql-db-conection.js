
// Obtengo el servicio mysql
var mysql = require('mysql');

// Agrego las credenciales para acceder a su base de datos
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'jokesdb'
});

// conexión a mysql
connection.connect(function(err) {

    console.log("conected")
    // en caso de error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

const pool = mysql.createPool(connection);
module.exports = pool;
