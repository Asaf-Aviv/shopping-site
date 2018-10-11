const express = require('express');

const app = express();
const storeAPI = require('./api/routes/store');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/store', storeAPI);

app.use((req, res, next) => res.status(404).json({ error: 'Page Not Found' }));

module.exports = app;
