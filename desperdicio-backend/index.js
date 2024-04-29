const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyparser = require('body-parser');
const express = require('express');
const app = express();

const db = require('./db');

const cors = require("cors");

//middleware
app.use(cors());
app.use(bodyparser.json())
//app.use('/api/donations', donationRoutes)
app.use('/api/donations', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3001,() => console.log('server started at 3001'));

require('./controllers/donation.controller.js')(app);

module.exports = app;