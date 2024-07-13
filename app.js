const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('JS');
});

app.listen(port);

// Command to run: node app.js