require('dotenv').config();
require('./db').init();

const app = require('./app/app');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
