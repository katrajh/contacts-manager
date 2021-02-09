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
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port "+port));