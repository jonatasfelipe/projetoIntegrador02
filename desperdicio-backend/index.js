const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyparser = require('body-parser');
const express = require('express');
const app = express();

const db = require('./db');

const cors = require("cors");

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css";

//middleware
app.use(cors());
app.use(bodyparser.json())
//app.use('/api/donations', donationRoutes)
app.use('/api/donations', swaggerUi.serve, swaggerUi.setup(swaggerFile, {
    customCss:
      '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
    customCssUrl: CSS_URL,
  }));

app.listen(3001,() => console.log('server started at 3001'));

require('./controllers/donation.controller.js')(app);

module.exports = app;