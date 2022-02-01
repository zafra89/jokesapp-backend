// Requiring module
const express = require('express');
const mysql = require("mysql");
// const res = require('express/lib/response');

// Creating express object
const app = express();
 
// CORS policies
const cors = require('cors');

app.use(cors());

//Connecting with mysql db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "jose",
    password: "password",
    database: "jokesdb",
  });

// Display all jokes
app.get('/jokes', (req, res) => {
    const sql = `SELECT * FROM result;`;

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results) {
            res.send(results);
        }
    })
})

// Handling GET request
app.get('/', (req, res) => {
	res.send('A simple Node App is '
		+ 'running on this server')
	res.end()
})

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
`Server started on port ${PORT}`));
