// Requiring module
const express = require('express');

// Creating express object
const app = express();

//conecting with pool mysql db
const pool = require('./mysql-db-conection');

// Display all jokes
app.get('/jokes', (request, response) => {
    pool.query('SELECT * FROM jokesdb', (error, result) => {
        if (error) throw error;

        response.send(result);
        console.log(result)
    });
});


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
