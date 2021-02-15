// index.js
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyparser.json());
app.use(cors());

const contacts = require('./routes/api/contacts');
app.use('/api/contacts', contacts);

const users = require('./routes/api/users');
app.use('/api/users', users);


// Handle production (runing on server)
if(process.env.NODE_ENV == 'production') {
    // Static folder 
    app.use(express.static(__dirname + '/public'));

    // Handle SPA (single page application)
    app.get(/.*./, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port "+port));