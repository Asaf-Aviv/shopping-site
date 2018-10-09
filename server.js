require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

require('./db');

const storeAPI = require('./api/store/store');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/store', storeAPI);

app.listen(port, () => console.log(`listening on port ${port}`));
