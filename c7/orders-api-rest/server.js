module.exports.initServer = async function () {
    const Config = require('config');
    const Koa = require('koa');
    const logger = require('koa-logger');
    const xmlParser = require('koa-xml-body');
    const bodyParser = require('koa-bodyparser');
    const respond = require('./middlewares/respond');
    const router = require('./controllers/router');
    
    const app = new Koa();
    
    app.use(logger());
    app.use(xmlParser(Config.get('middlewares.xmlParser')));
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.use(respond());
    app.listen(8080);
    
    console.log(`Server started, see http://localhost:8080
        Endpoints:
            * GET  /orders
            * POST /orders
            * GET  /orders?limit=:limit&offset=:offeset
            * GET  /orders/:id`);
}