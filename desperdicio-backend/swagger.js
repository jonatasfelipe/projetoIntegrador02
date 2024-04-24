const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        version: "1.0.0",
        title: "API Sem Desperdício",
        description: "API criada para aumentar a integração com outros sistemas e tentarmos dimunuir o desperdício de alimento no mundo..."
    },
    servers: [
        {
            url: 'http://localhost:3001'
        }
    ],
    components: {
        schemas: {
            
        },
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./controllers/donation.controller.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index');           // Your project's root file
});