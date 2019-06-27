const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
        title: 'Users REST API',
        version: '1.0.0',
        description: 'A sample user rest API',
    },
    host: 'localhost:8080',
    basePath: '/',
};
  
const options = {
    swaggerDefinition,
    apis: ['./controllers/userController.js'],
};
  
const swaggerSpec = swaggerJSDoc(options);

module.exports = class SwaggerController {
    async fetch (ctx, next) {
        ctx.body = swaggerSpec;
        await next();
    }
}