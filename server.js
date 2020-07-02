'use strict';

const express = require('express');

// Constants
//Comment

const PORT = 49160;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
