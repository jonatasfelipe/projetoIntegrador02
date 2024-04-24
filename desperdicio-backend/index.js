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

//first make sure db connection is successful
//then start the express server.
db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(3001,
            () => console.log('server started at 3001'))
    })
    .catch(err => console.log('db connection failed. \n' + err))

require('./controllers/donation.controller.js')(app);