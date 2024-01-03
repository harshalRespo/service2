// Importing Express.js
const express = require('express');
const app = express();
require('dotenv').config()

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World! from product service');
});

// Specify the port to listen on
const port = process.env.PORT;

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
